# Dockerfile (single file)

# ---- build stage ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# ---- app runtime ----
FROM node:20-alpine AS app
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
ENV PORT=3000 NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]

# ---- nginx runtime ----
FROM alpine:3.20 AS nginx
RUN apk add --no-cache nginx nginx-mod-http-brotli nginx-mod-http-zstd brotli zstd
ENV WWW_ROOT=/usr/share/nginx/html
RUN mkdir -p ${WWW_ROOT}/_next/static ${WWW_ROOT}/public /var/log/nginx /run/nginx
COPY --from=builder /app/.next/static ${WWW_ROOT}/_next/static
COPY --from=builder /app/public       ${WWW_ROOT}/public
# precompress
RUN set -eux; cd ${WWW_ROOT}; \
    find . -type f \( -name "*.js" -o -name "*.css" -o -name "*.svg" -o -name "*.json" -o -name "*.html" -o -name "*.txt" -o -name "*.xml" -o -name "*.ico" \) \
    -not -name "*.br" -not -name "*.zst" \
    -print0 | xargs -0 -I{} sh -c 'brotli -f -q 11 "{}" -o "{}.br" && zstd -f -19 "{}" -o "{}.zst"'
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]