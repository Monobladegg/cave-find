"use client";

import s from "./index.module.scss";
import { useEffect, useState } from "react";

import axios from "axios";
import { Dungeon as DungeonType } from "@/shared/types";
import Footer from "@/widgets/Footer/ui";

export type props = {
  params: {
    id: string
  }
}

export default function Dungeon({params}: props) {

  const [data, setData] = useState({} as DungeonType)

  useEffect(() => {
    const fetchData = async () => {

      axios.get("http://localhost:8000/Dungeons/" + params.id).then((res) => setData(res.data))
    }

    fetchData()
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
    <div className={s.container}>
      <img src={data.img} />
      <h1 className={s.title}>{data.title}</h1>
      <p className={s.text}>Сложность: {data.complexity}</p>
      <p className={s.text}>Среднее время:{data.averageTime}</p>
      <p className={s.text}>Стоимость: {data.price}</p>
      <p className={s.text}>Награда: {data.reward}</p>
    </div>
    <Footer />
    </div>
  );
}
