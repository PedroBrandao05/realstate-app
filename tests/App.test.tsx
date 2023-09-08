import React from "react";
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { expect, test } from "vitest";

test("should render the counter", () => {
    render(<App />)

    const count = screen.getByTitle('counter')
    expect(count.innerHTML).toBe("0")
})