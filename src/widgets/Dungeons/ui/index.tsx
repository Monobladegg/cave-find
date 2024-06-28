"use client";

import { Dungeon as DungeonType } from "@/shared/types";
import Dungeon from "@/entities/Dungeon/ui";
import axios from "axios";
import { useEffect, useState } from "react";

import s from "./index.module.scss";
import { useShallow } from "zustand/react/shallow";
import useStore from "@/features/store";

export default () => {
  const [data, setData] = useState<DungeonType[]>([]);

  const { mainUrl, limit, search } = useStore(
    useShallow((state: any) => ({
      mainUrl: state.mainUrl,
      limit: state.limit,
      search: state.search,
    }))
  );

  useEffect(() => {
    const fetchData = async () => {
      axios.get(mainUrl).then((res) => setData(res.data));
    };

    fetchData();
  }, [limit, search]);

  return (
    <div className={s.container}>
      {search !== ""
        ? data.map((item: DungeonType) => <Dungeon key={item.id} {...item} />)
        : data
            .filter((_, index) => index < limit)
            .map((item: DungeonType) => <Dungeon key={item.id} {...item} />)}
    </div>
  );
};
