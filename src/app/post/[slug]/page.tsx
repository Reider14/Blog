import { findPostBySlugCache } from "@/lib/posts/queries";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCache(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
