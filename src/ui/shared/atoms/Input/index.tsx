import React from "react";
import * as S from './styled'

export interface IInputConfiguration {
    label: string,
    type: string,
    title: string,
    id: string,
    reference: React.RefObject<HTMLInputElement>
}

export default function Input({config}: {config: IInputConfiguration}){
    return (
        <S.Wrapper>
            <S.Label htmlFor={config.id}>{config.label}</S.Label>
            <S.Input type={config.type} title={config.title} id={config.id} ref={config.reference}/>
        </S.Wrapper>
        
    )
}