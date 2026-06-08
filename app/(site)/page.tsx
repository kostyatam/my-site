import { SlideUpPage } from "@/components/site/ui/SlideUpPage/SlideUpPage";
import { experiences } from "@/const";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="main flex flex-col mx-auto justify-top h-full min-h-screen pt-16 max-w-84 xs:max-w-100 sm:pt-32 sm:max-w-128">
      <SlideUpPage>
        <header className="flex flex-col w-full mb-8">
          <Image
            className="rounded-full mb-4"
            src="/images/me.jpeg"
            alt="Konstantin"
            width={40}
            height={40}
          />
          <p className="text-lg leading-tight font-bold mb-0">
            Hello, I'm Konstantin
          </p>
          <p className="first:text-lg first:leading-tight first:font-bold first:mb-0 text-lg/6 mb-4">
            Tel-Aviv-based frontend developer with 10+ years of experience
            working in small and big teams in the tech industry.
          </p>
          <p className="first:text-lg first:leading-tight first:font-bold first:mb-0 text-lg/6 mb-4">
            I enjoy building web applications and design systems using
            Typescript, React, Redux (Zustand) and Next.js (of course vanilla JS
            too;).
          </p>
        </header>
        <section className="flex flex-col grow mb-3">
          <h2 className="text-lg leading-tight font-bold">Experience</h2>
        </section>
        <ul className="list-none flex flex-col gap-2 mb-8">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <div>
                <h3 className="text-base/6 underline decoration-2 underline-offset-2 decoration-dotted">
                  {experience.name}
                </h3>
              </div>
              <div className="flex justify-between text-[.85rem]/6">
                <p>{experience.position}</p>
                <p>
                  {experience.years.begin} - {experience.years.end ? experience.years.end?.slice(-2) + "'" : 'current'}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <footer className="flex gap-3 justify-between text-[.85rem]/6 pt-4 pb-12">
          <span>Konstantin © {currentYear}</span>
          <a
            className="underline decoration-2 underline-offset-2 decoration-dotted"
            href="https://www.linkedin.com/in/konstantin-kostin-319a83a8"
          >
            Connect on LinkedIn
          </a>
        </footer>
      </SlideUpPage>
    </main>
  );
}
