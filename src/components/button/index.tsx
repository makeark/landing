import "./button.css";

import React from "react";

interface ButtonProps {
  text: string;
}

export function Button(props: ButtonProps) {
  const {
    text
  } = props;
  return (
    <a className="button" onClick={() => {}}>
      {text}
    </a>
  );
}
