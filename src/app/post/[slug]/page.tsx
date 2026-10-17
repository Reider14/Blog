import { findPostBySlugCache } from "@/lib/posts/queries";
import { Metadata } from "next";
import { title } from "process";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCache(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCache(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
