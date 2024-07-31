"use client";

import { Dungeon as DungeonType } from "@/shared/types";
import DungeonComponent from "@/entities/Dungeon/ui";
import axios from "axios";
import { useEffect, useState } from "react";

import s from "./index.module.scss";
import { useShallow } from "zustand/react/shallow";
import useStore from "@/features/store";

import NotFoundIcon from "@/entities/notFoundIcon/ui";
import Button from "@/entities/Button/ui";
import { plusLimit } from "@/features/events";

const Dungeons = () => {
  const [data, setData] = useState<DungeonType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { mainUrl, limit, search } = useStore(
    useShallow((state: any) => ({
      mainUrl: state.mainUrl,
      limit: state.limit,
      search: state.search,
    }))
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(mainUrl);
        setData(res.data);
        setError(null);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          setError("Пусто");
        } else {
          setError("Произошла ошибка");
        }
      }
    };

    fetchData();
  }, [limit, search]);

  return (
    <div className={s.container}>
      {error ? (
        <div className={s.notFound}>
          <NotFoundIcon />
          <p className={s.text}>К сожелению, такого подземелья нет</p>
        </div>
      ) : (
        data
          .filter((_, index) => index < limit)
          .map((item: DungeonType) => <DungeonComponent key={item.id} {...item} />)
      )}
      {!error && (
        <div style={{ marginTop: "44px" }}>
          <Button
            bgc="rgba(255, 70, 70, 1)"
            radius="4"
            w="543"
            h="52"
            weight="700"
            onClick={plusLimit}
          >
            Показать больше
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dungeons;