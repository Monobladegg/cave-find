import s from "./not-found.module.scss";
import NotFoundIcon from "./notFoundIcon";

export default () => {
  return (
    <>
    <div className={s.container} />
    <div className={s.blackContainer} />
    <div className={s.main}>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>Страница не найдена</p>
      <NotFoundIcon />
    </div>
    </>
  );
};
