import React from "react";
import styles from "./Header.module.css";
import Slider from "../Slider/Slider";
//first page....(header==simple)
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>Standing out. Professional. </p>
        <p>
          <span>Step-by-Step Builder</span>
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <p>
          Create your <span>Resume</span>
        </p>
        <p>with multiple functionality</p>
        <Slider />
      </div>
    </div>
  );
}

export default Header;
