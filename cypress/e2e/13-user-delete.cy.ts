import { token, userId } from "./02-user-login.cy";
import { adminId, adminToken } from "./04-admin-get-all-deliveries.cy";

describe("User Deletion", () => {
  it("should delete a user using the token", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3001/api/user/delete/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should delete admin using the token", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3001/api/user/delete/${adminId}`,
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
