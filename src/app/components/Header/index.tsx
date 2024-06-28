import {FC} from "react";
import css from './styles.module.scss'

export const Header: FC = () => {

  return (
    <header className={css.header}>
      Маркуша покакал?
    </header>
  )
}