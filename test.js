const request = require("supertest");
const express = require("express");
const app = express();

// Define the route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Describe the test suite
describe("GET /", function () {
  it("responds with Hello, World!", function (done) {
    request(app)
      .get("/")
      .expect("Content-Type", /text/)
      .expect(200)
      .expect("Hello, World!", done);
  });
});
