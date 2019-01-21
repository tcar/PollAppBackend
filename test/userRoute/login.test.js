/**
 * @jest-environment node
 */
const axios = require("axios");
describe("login route", async function() {
  let user;
  beforeAll(async () => {
    user = await axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        email: "testLogin@email.com",
        password: "testLogin_password"
      }
    });
  });

  test("login", async function() {
    user = await axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email: "testLogin@email.com",
        password: "testLogin_password"
      }
    });
    expect(user.data).toMatchObject({
      status: "ok",
      token: expect.any(String)
    });
  });

  test("Eror when no data provided", async function() {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/login"
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({
        error: "Need to send login data"
      });
    }
  });

  test("Eror when user does not exist", async function() {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: {
          email: "nouser@email.com",
          password: "nouser_password"
        }
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({ error: "User not found" });
    }
  });
});
