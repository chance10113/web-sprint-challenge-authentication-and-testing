// Write your tests here
const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

// beforeAll(async () => {
//     await db.seed.run();
// })

afterAll(async () => {
  await db.destroy();
});

// test('sanity', () => {
//   expect(true).toBe(false)
// })

describe("tests the auth endpoints", () => {
  it("tests the register", async () => {
    const res = await request(server).post("/api/auth/register").send({
      username: "Starnk",
      password: "Secrec",
    });
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("Welcome Starnk");
  });

  it("tests username error", async () => {
    const res = await request(server).post("/api/auth/register").send({
      username: "Starnk",
      password: "Secrec",
    });
    expect(res.statusCode).toBe(409);
  });

  it("tests login error", async () => {
    const res = await request(server).post("/api/auth/login").send({
      username: "St4rnk",
      password: "Secrec",
    });
    expect(res.statusCode).toBe(401);
  });

  it("tests the login", async () => {
    const res = await request(server).post("/api/auth/login").send({
      username: "Starnk",
      password: "Secrec",
    });
    // expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("Welcome back Starnk");
  });
});
