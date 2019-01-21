/**
 * @jest-environment node
 */
const axios = require("axios");

describe("createPoll route", async function() {
  let poll;
  let user;
  beforeAll(async () => {
    user = await axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email: "testUser@gmail.com",
        password: "testPasseord123"
      }
    });
  });

  test("Error when no data provided", async () => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/create"
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({
        error: "Incomplete data sent"
      });
    }
  });

  test("Error when sent less then 2 options", async () => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/create",
        data: {
          title: "test question?",
          options: ["only one option"]
        }
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({
        error: "Poll needs to have at least 2 options"
      });
    }
  });

  test("Create Poll", async () => {
    poll = await axios({
      method: "post",
      url: "http://localhost:3000/create",
      data: {
        title: "test question?",
        options: ["first", "second"]
      },
      headers: {
        Authorization: "bearer " + user.data.token
      }
    });

    expect(poll.data.data).toMatchObject({
      title: expect.any(String),
      options: expect.any(Array)
    });
  });
});
