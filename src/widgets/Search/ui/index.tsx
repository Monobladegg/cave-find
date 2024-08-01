"use client";

import { useShallow } from "zustand/react/shallow";
import useStore from "@/features/store";
import s from "./index.module.scss";

type Props = {
  ph: string;
  w: string;
  h: string;
};

const SearchComponent = ({ ph, h }: Props) => {
  const { setSearch } = useStore(
    useShallow((state: any) => ({
      setSearch: state.setSearch,
    }))
  );

  return (
    <div className={s.container}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className={s.input}
        placeholder={ph}
        style={{ height: `${h}px` }}
      />
      <img className={s.icon} src="./searchIcon.svg" />
    </div>
  );
};

export default SearchComponent;
