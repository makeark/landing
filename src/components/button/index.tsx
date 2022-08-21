import "./button.css";

import React from "react";

interface ButtonProps {
  text: string;
  shadow?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    text,
    shadow
  } = props;

  return (
    <div className={"button" + (shadow ? " shadow" : "")} onClick={() => {}}>
      {text}
    </div>
  );
}
