import { findAllPublicPostsCached } from "@/lib/posts/queries/public";
import PostCoverImage from "../postCoverImage";
import PostSumary from "../PostSumary";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <PostSumary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
