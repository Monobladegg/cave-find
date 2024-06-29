"use client";

import s from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dungeon as DungeonType } from "@/shared/types";
import Footer from "@/widgets/Footer/ui";
import ComplexityDisplay from "@/widgets/ComplexityDisplay/ui";
import Button from "@/entities/Button/ui";
import Link from "next/link";

export type props = {
  params: {
    id: string;
  };
};

export default function Dungeon({ params }: props) {
  const [data, setData] = useState<DungeonType>({} as DungeonType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/Dungeons/" + params.id
        );
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const { id, title, complexity, averageTime, reward, price, img } = data;
  const validComplexity =
    typeof complexity === "number" && complexity >= 0 && complexity <= 5
      ? complexity
      : 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className={s.container}>
        <img
          style={{ borderRadius: "6px" }}
          width={540}
          src={img}
          alt={title}
        />
        <h1 className={s.title}>{title}</h1>
        <div className={s.flex}>
          <p className={s.text}>Сложность:</p>
          <div>
            <ComplexityDisplay complexity={validComplexity} />
          </div>
        </div>
        <div className={s.flex}>
          <p className={s.text}>Среднее время:</p>
          <p className={s.value}>{averageTime}</p>
        </div>
        <div className={s.flex}>
          <p className={s.text}>Стоимость:</p>
          <p className={s.value}>{price}</p>
        </div>
        <div className={s.flex}>
          <p className={s.text}>Ценность наград:</p>
        </div>
        <progress className={s.progressBar} value={reward} max={100}>{reward}</progress>
      </div>
      <Link href="/">
        <Button
          bgc="rgba(255, 70, 70, 1)"
          radius="4"
          w="543"
          h="52"
          weight="700"
        >
          Вернуться назад
        </Button>
      </Link>
      <Footer />
    </div>
  );
}
