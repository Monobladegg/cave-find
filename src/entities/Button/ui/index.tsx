"use client";

import useStore from "@/features/store";
import s from "./index.module.scss";
import { useShallow } from "zustand/react/shallow";

export type props = {
  bgc: string;
  radius: string;
  w: string;
  h: string;
  onClick?: () => void;
  children: React.ReactNode;
  weight: string;
};

export default ({ bgc, radius, w, h, onClick, children, weight }: props) => {

  const { plusLimit } = useStore(useShallow((state: any) => ({
    plusLimit: state.plusLimit,
  })))

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
