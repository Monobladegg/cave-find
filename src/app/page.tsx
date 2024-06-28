import Button from "@/entities/Button/ui";
import Footer from "@/widgets/Footer/ui";
import Search from "@/widgets/Search/ui";
import Dungeons from "@/widgets/Dungeons/ui";
import { plusLimit, search } from "@/features/buttonEvents";
import { Metadata } from "next";

import s from "./page.module.scss";

export const metadata: Metadata = {
  title: "Подземелья",
  description: `Главная страница`,
};


export default function Home() {
  return (
    <main>
      <h1>Найди нужное тебе подземелье!</h1>
      <div className={s.container}>
        <Search ph="Поиск..." w="374" h="52" />
        <Button bgc="rgba(255, 70, 70, 1)" radius="4" w="126" h="52" weight="500" onClick={search}>Найти</Button>
      </div>
        <Dungeons />
      <Button bgc="rgba(255, 70, 70, 1)" radius="4" w="543" h="52" weight="700" onClick={plusLimit}>Показать больше</Button>
      <Footer />
    </main>
  );
}
