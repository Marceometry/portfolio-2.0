import { ReactNode } from "react";
import css from '../css/components/textColor.module.css'

type TextColorProps = {
    children: ReactNode
}

export function Green({ children }: TextColorProps) {
    return <span className={css.green}>{ children }</span>
}

export function Purple({ children }: TextColorProps) {
    return <span className={css.purple}>{ children }</span>
}