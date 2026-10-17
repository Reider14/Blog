import { findPostBySlugCache } from "@/lib/posts/queries";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCache(slug);
  return (
    <div>
      <p>{post.slug}</p>
    </div>
  );
}
