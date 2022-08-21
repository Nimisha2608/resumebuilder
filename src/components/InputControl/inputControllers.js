import React from "react";

import styles from "./inputControllers.module.css";
//used for control the input values...
function InputControlers({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControlers;
