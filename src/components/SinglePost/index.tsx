import { findPostBySlugCache } from "@/lib/posts/queries";
import PostHeading from "../postHeading";
import { PostDate } from "../PostDate";
import Image from "next/image";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCache(slug);
  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="text-xl mb-4 text-slate-600">{post.excerpt}</p>

      <div>{post.content}</div>
    </article>
  );
}
