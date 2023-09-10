import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const Button = styled.button`
    color: ${Colors.WHITE};
    background-color: ${Colors.BLUE};
    display: flex;
    width: 17rem;
    padding: 0.5rem;
    height: 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    border: none;
    border-radius: 0.5rem;
    margin-top: 2rem;
`