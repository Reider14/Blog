import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

// documentacao drizzle operator
export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log("\n", "D findAllPublic", "\n");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const post = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return post;
  }

  async findById(id: string): Promise<PostModel> {
    console.log("\n", "D findById", "\n");
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado para ID");

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });
    if (!post) throw new Error("Post não encontrado para slug");

    return post;
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach((post) => console.log(post.slug, post.published));
})();
