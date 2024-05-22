// server.mjs
import express from "express";
import { db } from "../db/db.js";
import { postsTable } from "../db/schema.js";
import { eq } from "drizzle-orm";

const router = express.Router();

let posts = [
  { id: 1, title: "post one" },
  {
    id: 4.192258854050079,
    title: "Tree",
    description: "Some description",
  },
  { id: 59.477899317079164, title: "Free", description: "new desc" },
  { id: 33.739611723240955, title: "dtre", description: "new erewr" },
];

router.get("/", async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const result = await db
    .select({
      id: postsTable.id,
      title: postsTable.title,
      content: postsTable.content,
    })
    .from(postsTable)
    .limit(limit);
  res.status(200).json(result);
});

router.post("/", async (req, res) => {
  try {
    const newPost = await db
      .insert(postsTable)
      .values({ title: req.body.title, content: req.body.content })
      .returning();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  console.log("here");
  const postId = req.params.id.toString();
  try {
    const posts = await db
      .select({
        id: postsTable.id,
        title: postsTable.title,
        content: postsTable.content,
      })
      .from(postsTable)
      .where(eq(postsTable.id, postId));
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  const postId = req.params.id.toString();
  const updatesObj = Object.keys(req.body);
  let newUpdateObject = {};
  updatesObj.forEach((item) => {
    newUpdateObject[item] = req.body[item];
  });
  console.log("updates = ", newUpdateObject);
  try {
    const updatedPost = await db
      .update(postsTable)
      .set(newUpdateObject)
      .where(eq(postsTable.id, postId))
      .returning();
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  const postId = req.params.id.toString();
  // const filteredposts = posts.filter(
  //   (post) => post.id.toString() !== postId.toString()
  // );
  const deletedUser = await db
    .delete(postsTable)
    .where(eq(postsTable.id, postId))
    .returning();
  res.status(200).json(deletedUser);
});

export default router;
