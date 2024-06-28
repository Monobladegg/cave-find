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

  const { limit } = useStore(
    useShallow((state: any) => ({ limit: state.limit }))
  );

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8000/Dungeons?_limit=${limit}`)
        .then((res) => setData(res.data));
    };

    fetchData();
  }, [limit]);

  return (
    <div className={s.container}>
        {data.map((item: DungeonType) => (
          <Dungeon key={item.id} {...item} />
        ))}
    </div>
  );
};
