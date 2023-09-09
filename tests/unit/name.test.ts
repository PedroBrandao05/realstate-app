import { expect, test } from 'vitest'
import Name from '../../src/domain/entities/person/name'

test("should create a Name", () => {
    const name = new Name("John Doe")
    expect(name.value).toBeDefined()
})

test("should not create a name", () => {
    expect(() => new Name("5511995694012916")).toThrow(new Error("Nome inválido"))
})