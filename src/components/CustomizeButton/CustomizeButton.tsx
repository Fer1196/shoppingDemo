import { ReactElement } from "react";
import "./CustomizeButton.css";

interface CustomizePropsButton {
  onclick: () => void;
  text: string;
  children?: ReactElement | ReactElement[];
  color: string;
}

export function CustomizeButton({
  onclick,
  text,
  children,
  color,
}: CustomizePropsButton) {
  return (
    <button
      className="customize-button"
      onClick={onclick}
      style={{
        background: color,
      }}
    >
      {text}
      {"   "}
      {children}
    </button>
  );
}
