import { useState, useEffect } from "react";
import styles from "../styles/FadeIn.module.css";

const Intro = () => {
  return (
    <div className={`${styles.fadeIn} `}>
      <h1 className="text-4xl font-bold mt-10 text-[#df6c4f]/70 0">
        I build things for the web
      </h1>
      <p className="text-2xl mt-8 w-full lg:w-1/2">
        {" "}
        I'm a software engineer who works across the full stack. I enjoy using
        code to solve everyday problems, and right now I'm focused on building
        life saving tech with{" "}
        <span className="text-[#df6c4f]/80">Proxxi Technology</span>.
      </p>
      <a
        href="#"
        class="bg-[#C38D9E] text-white font-bold py-2 px-10 rounded-md inline-block mt-10 hover:bg-opacity-75 transition-colors duration-300 lg:mt-20"
      >
        Resume
      </a>
    </div>
  );
};

export default Intro;
