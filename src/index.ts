import express from "express";
import Stays from "./stays";

const port = 3000;
const app = express();

app.use("/stays", Stays);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
