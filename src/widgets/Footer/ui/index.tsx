import s from './index.module.scss'

export default function Footer() {
  return (
    <>
      <hr className={s.hr}/>
      <h3 className={s.title}><span className={s.part1}>design by </span><span className={s.part2}>@Meow_Double 2024</span></h3>
    </>
  )
}