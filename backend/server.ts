import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import jobOffersApi from "./modules/job-offers/api/job-offers.api";
import path from "path";

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname + "/../../frontend/dist")));

// api endpoints
jobOffersApi(app);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../frontend/dist/index.html"));
});

(async () => {
  const port = process.env.APP_SERVER_PORT;
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
})();

process.on("uncaughtException", function (err) {
  console.error(err);
});
