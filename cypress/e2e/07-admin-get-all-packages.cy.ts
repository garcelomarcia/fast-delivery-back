import { adminToken } from "./04-admin-get-all-deliveries.cy";

describe("Get All Packages", () => {
  it("should get all packages", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/api/packages/",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.equal(200);
    });
  });

  it("con not get all packages without token", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/api/packages/",
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer tokeninvalido`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});
