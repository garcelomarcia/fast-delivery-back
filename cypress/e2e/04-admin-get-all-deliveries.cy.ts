let adminToken;
let adminId;
export { adminToken, adminId };

describe("Get All Deliveries", () => {
  beforeEach(() => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/login",
      body: {
        email: "admin@example.com",
        password: "admin"
      }
    }).then((response) => {
      cy.log(response.body);
      adminToken = response.body.token;
      adminId = response.body.user.id;
      Cypress.env("adminToken", adminToken);
      Cypress.env("adminId", adminId);
    });
  });

  it("should get all deliveries", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/api/user/deliveries",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
