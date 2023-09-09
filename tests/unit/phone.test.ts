import { expect, test } from 'vitest'
import Phone from '../../src/domain/entities/person/phone'

test("should create a phone", () => {
    const phone = new Phone("+55 11 94332-1171")
    expect(phone.value).toBeDefined()
})

test("should not create a phone", () => {
    expect(() => new Phone("5511995694012916")).toThrow(new Error("Telefone inválido"))
})