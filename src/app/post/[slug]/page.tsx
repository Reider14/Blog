import { SinglePost } from "@/components/SinglePost";
import SpeenLoader from "@/components/speenLoader";
import { findPostBySlugCache } from "@/lib/posts/queries";
import { Metadata } from "next";
import { title } from "process";
import { Suspense } from "react";

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

  <Suspense fallback={<SpeenLoader className={"min-h-20 mb-16"} />}>
    <SinglePost slug={slug} />
  </Suspense>;
}
