import { expect, test } from "vitest";
import Creci from '../../src/domain/entities/user/creci'

test("should create an creci", () => {
    const email = new Creci("18256-J")
    expect(email.value).toBeDefined()
})

test("should not create an invalid creci", () => {
    expect(() => new Creci("1432-s")).toThrow(new Error("Creci inválido"))
})