describe("crear administrador", () => {
  it("create admin", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/register",
      body: {
        email: "admin@example.com",
        name: "exaasadmple",
        lastname: "exasadample",
        address: "exaaasdmplee",
        phone: 12347890,
        password: "admin",
        isAdmin: true
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});
