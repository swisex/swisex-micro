import express, { Request, Response, json } from "express";
import bodyParser from "body-parser";

const port = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());

// Ping test
app.post("/ping", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("pong");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
