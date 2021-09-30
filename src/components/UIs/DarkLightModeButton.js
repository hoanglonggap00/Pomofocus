/** @format */

import React from "react";

import classes from "./DarkLightModeButton.module.css";

const DarkLightModeButton = () => {
  return (
    <>
      <button
        aria-label='Activate light mode'
        title='Activate light mode'
        class={classes.darkModeButton}>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          style={{ transform: "rotate(40deg)" }}
          class={classes.DarkModeToggle__MoonOrSun}>
          <mask id='moon-mask-main-nav'>
            <rect x='0' y='0' width='18' height='18' fill='white'></rect>
            <circle cx='10' cy='2' r='8' fill='black'></circle>
          </mask>
          <circle cx='9' cy='9' mask='url(#moon-mask-main-nav)' r='8'></circle>
          <g>
            <circle
              cx='17'
              cy='9'
              r='1.5'
              fill='var(--color-text)'
              style={{
                transformOrigin: "center center",
                transform: "scale(0)",
              }}></circle>
            <circle
              cx='13'
              cy='15.928203230275509'
              r='1.5'
              fill='var(--color-text)'
              style={{
                transformOrigin: "center center",
                transform: "scale(0)",
              }}></circle>
            <circle
              cx='5.000000000000002'
              cy='15.92820323027551'
              r='1.5'
              fill='var(--color-text)'
              style={{
                transformOrigin: "center center",
                transform: "scale(0)",
              }}></circle>
            <circle
              cx='1'
              cy='9.000000000000002'
              r='1.5'
              fill='var(--color-text)'
              style={{
                transformOrigin: "center center",
                transform: "scale(0)",
              }}></circle>
            <circle
              cx='4.9999999999999964'
              cy='2.071796769724492'
              r='1.5'
              fill='var(--color-text)'
              style={{
                transformOrigin: "center center",
                transform: "scale(0)",
              }}></circle>
            <circle
              cx='13'
              cy='2.0717967697244912'
              r='1.5'
              fill='var(--color-text)'
              style={{
                transformOrigin: "center center",
                transform: "scale(0)",
              }}></circle>
          </g>
        </svg>
      </button>
    </>
  );
};

export default DarkLightModeButton;
