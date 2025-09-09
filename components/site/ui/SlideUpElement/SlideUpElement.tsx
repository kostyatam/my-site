import { Children, cloneElement, CSSProperties, JSX } from "react";
import "./SlideUpElement.css";

export const SlideUpWithBlur = ({
  children,
  index = 0,
}: {
  children: JSX.Element[];
  index?: number;
}) => {
  return Children.map(children, (child, i) => {
    const clonedChild = cloneElement(child, {
      className: `slide-up-element [--i:var(--index)] ${
        child.props.className || ""
      }`,
      style: {
        "--index": i + index,
      } as CSSProperties,
    });
    return clonedChild;
  });
};
