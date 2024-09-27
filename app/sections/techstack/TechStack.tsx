import React from "react";
import styles from "./TechStack.module.scss";

function TechStack() {
  return (
    <div className={styles.container}>
      <div className={styles.handle}></div>
      <div className={styles.main}>
        {/* <div className={styles.title}> TECHSTACK</div> */}
        <div>
          <div>LANGUAGES</div>
          <div className={styles.skills}>
            <span>Javascript/Typescript</span>
            <span>Python</span>
            <span>Dart</span>
            <span>Java</span>
          </div>
        </div>
        <div>
          <div>FRONTEND</div>
          <div className={styles.skills}>
            <span>html/css</span>
            <span>Vanilla JS/TS</span>
            <span>gsap</span>
            <span>Flutter</span>
            <span>React Js</span>
            <span>Next Js</span>
          </div>
        </div>
        <div>
          <div>BACKEND</div>
          <div className={styles.skills}>
            <span>fastify</span> <span> expressjs </span> <span>django</span>
            <span>nodejS</span>
            <span>SpringBoot</span>
            <span>FastApi</span>
            <span> MySQL</span>
            <span>Postgres SQL</span>
            <span>Database ORMS</span>
            <span>mongo db</span>
          </div>
        </div>
        <div>
          <div>WEB3</div>
          <div className={styles.skills}>
            <span>Ethers Js</span>
            <span>Wagmi</span>
            <span>Viem</span>
            <span>Web3 js</span>
            <span>Moralis</span>
            <span></span>
          </div>
        </div>

        <div>
          <div>TOOLS</div>
          <div className={styles.skills}>
            <span>VPS</span>
            <span>Firebase</span>
            <span>supabase</span>
            <span>Google cloud console</span>
            <span>Heroku</span>
            <span>AWS</span>
            <span>Git,GitHhub</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
