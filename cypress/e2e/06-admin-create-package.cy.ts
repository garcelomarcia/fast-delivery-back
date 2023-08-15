import { adminToken } from "./04-admin-get-all-deliveries.cy";
let newPackage;
export { newPackage };

describe("Create Package", () => {
  it("should create a new package", () => {
    const packageData = {
      clientname: "example",
      quantity: 22232,
      weight: 123,
      address: "address example",
      status: "active"
    };

    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/packages/new",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
      },
      body: packageData
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("newPackage");
      newPackage = response.body.newPackage;
      Cypress.env("newPackage", adminToken);
      cy.log("El resultado es:", newPackage);
    });
  });

  it("can not create a new package whithout token", () => {
    const packageData = {
      clientname: "example",
      quantity: 22232,
      weight: 123,
      address: "address example",
      status: "active"
    };

    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/packages/new",
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer token invalido`,
        "Content-Type": "application/json"
      },
      body: packageData
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});
