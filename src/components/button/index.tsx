import "./button.css";

import React from "react";

interface ButtonProps {
  text: string;
  shadow?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    text,
    shadow,
    onClick
  } = props;

  const className = ("button" + (shadow ? " primary-drop-shadow primary-drop-shadow-hover" : ""));

  return (
    <div
      onClick={onClick}
      className={className}>
      {text}
    </div>
  );
}
