/**
 * @jest-environment node
 */
const axios = require("axios");
const models = require("../../models");
describe("test voting", () => {
  test("Error when no user data sent", async () => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/vote"
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({
        error: "No user data provided"
      });
    }
  });

  test("Error when no option sent", async () => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/vote",
        data: {
          user_id: 1
        }
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toMatchObject({ error: "no option provided" });
    }
  });

  test("valid voting", async () => {
    let vote = await axios({
      method: "post",
      url: "http://localhost:3000/vote",
      data: {
        user_id: 1,
        option_id: 1
      }
    });

    expect(vote.data).toMatchObject({
      status: "ok",
      data: "voted"
    });
  });
});
