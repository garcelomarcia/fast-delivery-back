import { token, userId } from "./02-user-login.cy";

describe("User Editing", () => {
  it("should edit a user using the exported token", () => {
    cy.log("Response body:", token, userId);
    cy.request({
      method: "PUT",
      url: `http://localhost:3001/api/user/edit/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        name: "example user",
        age: 30
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("can not edit a user without the correct token", () => {
    cy.log("Response body:", token, userId);
    cy.request({
      method: "PUT",
      url: `http://localhost:3001/api/user/edit/${userId}`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer 123456789454`
      },
      body: {
        name: "example user",
        age: 30
      }
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.equal(401);
      expect(response.body.message).to.be.eq("Invalid Token");
    });
  });

  it("can not edit a wrong property or not allow types of data in the fields", () => {
    cy.log("Response body:", token, userId);
    cy.request({
      method: "PUT",
      url: `http://localhost:3001/api/user/edit/${userId}`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        name: 4564897,
        age: {},
        perro: ["gato", "oso", "elefante"],
        mail: "",
        id: "cualquiernumero"
      }
    }).then((response) => {
      expect(response.status).to.equal(500);
    });
  });
});
