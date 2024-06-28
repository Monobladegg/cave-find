"use client";

import { Dungeon } from "@/shared/types";
import { useEffect, useState } from "react";

import s from "./index.module.scss";
import Link from "next/link";

export default ({
  id,
  title,
  complexity,
  averageTime,
  reward,
  price,
  img,
}: Dungeon) => {

  return (
    <div className={s.dungeon} style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          borderRadius: "3px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          opacity: 1,
        }}
      >
        <div className={s.title}>{title}</div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1,
          opacity: 1,
        }}
      >
        {[...new Array(complexity)].map((_, i) => (
          <img key={i} src="./orangeCom.svg" style={{ marginRight: "10px" }} />
        ))}
        {[...new Array(5 - complexity)].map((_, i) => (
          <img key={i} src="./whiteCom.svg" style={{ marginRight: "10px" }} />
        ))}
      </div>
      <Link href={`/dungeon/${id}`}>
        <div
          className={s.desc}
          style={{ position: "absolute", bottom: 0, zIndex: 1, opacity: 1 }}
        >
          <span className={s.text}>
            Посмотреть подробнее <img className={s.arrow} src="./arrow.svg" />
          </span>
        </div>
      </Link>
    </div>
  );
};
