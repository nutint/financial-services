import { describe, it } from "vitest"
import supertest from "supertest"

describe("index", () => {
  it("should pass", async () => {
    const response = await supertest("http://localhost:3001").get("/data")

    console.log(response.body)
  })
})