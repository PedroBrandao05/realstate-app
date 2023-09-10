import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Colors } from "../../global/colors";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    align-items: flex-start;
    padding: 5rem 0rem 5rem 9rem;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
`

export const Title = styled.h1`
    color: ${Colors.BLACK};
    font-family: Poppins;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const BottomDiv = styled.div`
    display: flex;
    padding-left: 2.1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`

export const LinkToSignin = styled(Link)`
    text-decoration: none;
    color: ${Colors.BLUE};
    font-size: 0.8rem;
`

export const WavesBottom = styled.img`
    position: absolute;
    height: 54rem;
    z-index: 3;
    top: 0;
    right: 0;
    align-items: flex-end;
    content: url('/waves-bottom.png');
`

export const ResponseText = styled.p<{error?: boolean}>`
    font-size: 0.8rem;
    color: ${props => props.error? 'red' : '#00FF29'};
`