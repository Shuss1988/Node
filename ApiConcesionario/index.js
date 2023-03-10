const express = require("express");
const cors = require("cors");
const connect = require("./src/utils/connect");
const { configCloudinary } = require("./src/middlewares/files.middleware");
const PORT = process.env.PORT || 8080;

const app = express();
connect();
configCloudinary();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

const CarsRoutes = require("./src/api/routes/cars.routes");
const ConcesionarioRoutes = require("./src/api/routes/concesionario.routes");
const UsersRoutes = require("./src/api/routes/users.routes");

app.use("/api/v1/users", UsersRoutes);
app.use("/api/v1/concesionario", ConcesionarioRoutes);
app.use("/api/v1/cars", CarsRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
