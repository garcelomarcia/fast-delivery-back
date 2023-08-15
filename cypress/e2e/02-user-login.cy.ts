let token;
let userId;
export { token, userId };

describe("User Login", () => {
  it("should login a user and generate a token", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/login",
      body: {
        email: "example@example.com",
        password: "password123"
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("token");
      expect(response.body).to.have.property("user");
      token = response.body.token;
      userId = response.body.user.id;
    });
  });

  it("Not login a user whit wrong password", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/login",
      failOnStatusCode: false,
      body: {
        email: "example@example.com",
        password: "Password123456789"
      }
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.equal(500);
      expect(response.body).to.be.eq("Internal Server Error");
    });
  });
});
