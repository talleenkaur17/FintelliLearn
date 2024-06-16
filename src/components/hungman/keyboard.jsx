import React from "react";
import styles from "./Keyboardmodule.module.css";
const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z",
];




function Keyboard({activeLetters ,  inactiveLetters , addGuessedLetter , disabled=false}) {
  return (
    <div
      style={{
        
         display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        paddingRight:"10px",
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive ||disabled}
            key={key}
          >
            {key}
          </button>
        // <button onClick={()=>addGuessedLetter(key)} className={`${styles.btn}`} key={key}>{key}</button>
        );
      })}
    </div>
  );
}

export default Keyboard;
