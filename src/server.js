// server.mjs
import express from "express";
const PORT = process.env.PORT;
import posts from "./routes/posts.js";

const app = express();

// export const db = drizzle(connectionString);
// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/api/posts", posts);
// starts a simple http server locally on port 3000
app.listen(PORT, "127.0.0.1", () => {
  console.log("PORT", PORT);
  console.log(`Listening on ${PORT}`);
});

// run with `node server.mjs`
