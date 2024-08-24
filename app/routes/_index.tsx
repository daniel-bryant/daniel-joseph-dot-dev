import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Daniel Joseph Bryant" },
    { name: "description", content: "Software Engineer" },
  ];
};

import rails101 from "app/images/rails101.png";
import hipcamp from "app/images/hipcamp.png";
import checkr from "app/images/checkr.png";
import usertesting from "app/images/usertesting.png";
import github from "app/images/github-mark-white.png";

const allYears = new Date().getFullYear() - 2009;
const proYears = new Date().getFullYear() - 2012;

export default function Index() {
  return (
    <div className="font-sans">
      <div className="p-4 flex justify-end bg-japanese-violet">
        <a href="https://github.com/daniel-bryant/daniel-joseph-dot-dev">
          <img src={github} width="25" />
        </a>
      </div>
      <div className="p-4">
        <h1 className="text-3xl">Daniel Joseph Bryant</h1>
        <p>
          <a href="/resume.pdf" className="underline">Resume</a>{' • '}
          <a href="tel:+13018210735" className="underline">301-821-0735</a>{' • '}
          <a href="mailto:daniel@danieljoseph.dev" className="underline">daniel@danieljoseph.dev</a>
        </p>
        <p>
          Software engineer, architect, lead, and rubyist with {proYears} years of
          professional experience and {allYears} years building websites.
        </p>
        <h1 className="text-3xl mt-4">Showcase</h1>
        <img src={hipcamp} />
        <img src={checkr} />
        <img src={usertesting} />
        <img src={rails101} />
      </div>
      <div className="p-4 flex justify-center text-japanese-violet">
        <p>Thanks for visiting 👋</p>
      </div>
    </div>
  );
}
