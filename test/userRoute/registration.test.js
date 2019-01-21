/**
 * @jest-environment node
 */
const axios = require("axios");
let jwt = require("jsonwebtoken");
let User = require("../../models/user");
describe("register route", async function() {
  let user;

  afterAll(async () => {
    let data = await jwt.decode(user.data.token);
    await User.destroy({ where: { id: data.id } });
  });

  test("user registration", async function() {
    user = await axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        email: "test@email.com",
        password: "test_password"
      }
    });
    expect(user.data).toMatchObject({
      status: "ok",
      token: expect.any(String)
    });
  });
  test("Error when registering without data", async function() {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/register"
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({
        error: "Need to send registration data"
      });
    }
  });

  test("Error when user already exists", async function() {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/register",
        data: {
          email: "test@email.com",
          password: "test_password"
        }
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({
        error: "This user already exists"
      });
    }
  });
});
