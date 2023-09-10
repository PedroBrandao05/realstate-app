import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Line = styled.div`
    height: 0.1rem;
    background-color: black;
    width: 5rem;
`

export const Text = styled.p`
    color: ${Colors.BLACK};
    font-size: 0.8rem;
    font-weight: 300;
`