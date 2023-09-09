import { expect, test } from "vitest";
import Email from '../../src/domain/entities/person/email'

test("should create an email", () => {
    const email = new Email("johndoe456@gmail.com")
    expect(email.value).toBeDefined()
})

test("should not create an invalid email", () => {
    expect(() => new Email("emailerrado.com")).toThrow(new Error("Email inválido"))
})