import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Input = styled.input`
    width: 16rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.10);
    padding: 0.5rem;

    :focus{
        outline: none;
    }
`

export const Label = styled.label`
    color: #1A1A1A;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`