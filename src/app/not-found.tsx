import s from "./not-found.module.scss";
import NotFoundIcon from "../entities/notFoundIcon/ui";
import Link from "next/link";

export default () => {
  return (
    <>
    <div className={s.container} />
    <div className={s.blackContainer} />
    <Link style={{ position: "absolute", top: "12px", left: "12px", textShadow: "0px 0px 15px #0077FF" }} href="/">
      <p>Вернуться на главную</p>
    </Link>
    <div className={s.main}>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>Страница не найдена</p>
      <NotFoundIcon />
    </div>
    </>
  );
};
