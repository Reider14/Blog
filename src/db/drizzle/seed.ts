import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const postRepository = new JsonPostRepository();
  const post = await postRepository.findAll();

  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(post);

    console.log();
    console.log(`${post.length} foram salvos na base de dados`);
    console.log();
  } catch (e) {
    console.log();
    console.log("Acorreu um erro...");
    console.log();
    console.log(e);
    console.log();
  }
})();
