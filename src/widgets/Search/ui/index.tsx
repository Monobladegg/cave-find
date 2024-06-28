import s from './index.module.scss'

type props = {
  ph: string
  w: string
  h: string
}

export default ({ph, w, h,}: props) => {

  return <div className={s.container} style={{width: `${w}px`}}>
    <input className={s.input} placeholder={ph} style={{width: `100%`, height: `${h}px`}} />
    <img className={s.icon} src="./searchIcon.svg" />
  </div>

}