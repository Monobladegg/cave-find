"use client";

import s from "./index.module.scss";

export type props = {
  bgc: string;
  radius: string;
  w: string;
  h: string;
  onClick?: () => void;
  children: React.ReactNode;
  weight: string;
};

const Button = ({ bgc, radius, w, h, onClick, children, weight }: props) => {

  return (
    <button
      className={s.btn}
      onClick={onClick}
      style={{
        backgroundColor: bgc,
        borderRadius: `${radius}px`,
        width: `${w}px`,
        height: `${h}px`,
        fontWeight: weight,
      }}
    >
      {children}
    </button>
  );
};

export default Button;