/**
 * @jest-environment node
 */
const axios = require("axios");
describe("get All poles route", async () => {
  test("get all polles", async () => {
    let polls = await axios({
      method: "get",
      url: "http://localhost:3000/poll/getAll"
    });

    polls.data.forEach(poll => {
      expect(poll).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        user_id: expect.any(Number)
      });
    });
  });

  test("get one poll", async () => {
    let poll = await axios({
      method: "get",
      url: "http://localhost:3000/poll/getOne/1"
    });

    expect(poll.data).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      user_id: expect.any(Number)
    });
  });
});
