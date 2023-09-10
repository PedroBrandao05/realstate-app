import { MouseEventHandler } from 'react'
import * as S from './styled'

export interface IButtonConfiguration {
    title: string,
    text: string,
    action: MouseEventHandler<HTMLButtonElement>,
    type: "submit" | "button" | "reset"
}

export default function Button({config}: {config: IButtonConfiguration}){
    return (
        <S.Button type={config.type} title={config.title} onClick={config.action}>{config.text}</S.Button>
    )
}