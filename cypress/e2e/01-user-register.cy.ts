describe("User Registration", () => {
  it("should register a new user", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/register",
      body: {
        email: "example@example.com",
        name: "example",
        lastname: "example",
        address: "example",
        phone: 12347890,
        password: "password123"
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });

  // it("Failed to create a new user, error null fields", () => {
  //   cy.request({
  //     method: "POST",
  //     url: "http://localhost:3001/api/user/register",
  //     failOnStatusCode: false,
  //     body: {
  //       email: null,
  //       name: null,
  //       lastname: null,
  //       address: null,
  //       phone: null,
  //       password: null
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.equal(400);
  //     expect(response.body.message).to.be.eq("Failed to create user");
  //   });
  // });

  // it("Failed to create a user with the same email, error", () => {
  //   cy.request({
  //     method: "POST",
  //     url: "http://localhost:3001/api/user/register",
  //     failOnStatusCode: false,
  //     body: {
  //       email: "example@example.com",
  //       name: "example",
  //       lastname: "example",
  //       address: "example",
  //       phone: 12347890,
  //       password: "password123"
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.equal(400);
  //     expect(response.body.message).to.be.eq("Failed to create user");
  //   });
  // });

  // it("Failed to create a user with not allow type of data, error", () => {
  //   cy.request({
  //     method: "POST",
  //     url: "http://localhost:3001/api/user/register",
  //     failOnStatusCode: false,
  //     body: {
  //       email: 4564861,
  //       name: {},
  //       lastname: [],
  //       address: 45687,
  //       phone: 12347890,
  //       password: null
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.equal(400);
  //     expect(response.body.message).to.be.eq("Failed to create user");
  //   });
  // });
});
