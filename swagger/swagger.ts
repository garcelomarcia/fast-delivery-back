const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "FasterDelivery", version: "1.0.0" }
  },
  apis: ["./routes/*.ts", "./models/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: any, num: any): any => {
  app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/api/docs.json", (req: any, res: any): any => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `Acceso documentacion rutas back-end http://localhost:${num}/api/docs`
  );
};

module.exports = { swaggerDocs };
export {};
