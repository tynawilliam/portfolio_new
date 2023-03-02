import React, { useEffect, useState } from "react";
import styles from "../styles/TypingText.module.css";

const TypingText = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Tyna";

  return <h1 className={styles.typewriter}>Hi, I'm Tyna</h1>;
};

export default TypingText;
