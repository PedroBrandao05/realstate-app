import React from 'react'
import {expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import Input, {IInputConfiguration} from '../../../src/ui/shared/atoms/Input'

test("should render an Input", () => {
    const reference = React.createRef<HTMLInputElement>()

    const inputConfiguration : IInputConfiguration = {
        label: "Teste",
        type: "text",
        id: "test",
        title: "test",
        reference
    }
    render(<Input config={inputConfiguration}/>)

    const input = screen.getByTitle(inputConfiguration.title)
    const label = screen.getByText(inputConfiguration.label)

    expect(input).toBeDefined()
    expect(label).toBeDefined()
})