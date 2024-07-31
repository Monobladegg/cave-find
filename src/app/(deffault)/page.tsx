import Footer from "@/widgets/Footer/ui";
import Search from "@/widgets/Search/ui";
import Dungeons from "@/widgets/Dungeons/ui";
import { Metadata } from "next";

import s from "./page.module.scss";

export const metadata: Metadata = {
  title: "Подземелья из Genshin Impact",
  description: `Проект был разработан Frontend разработчиком - Monoblade`,
};

export default function Home() {
  return (
    <main>
      <h1 className={s.h1}>Найди нужное тебе подземелье!</h1>
      <div className={s.container}>
        <Search ph="Поиск..." w="574" h="52" />
      </div>
      <Dungeons />
      <Footer />
    </main>
  );
}
