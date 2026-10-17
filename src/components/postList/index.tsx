import { postRepository } from "@/repositories/post";
import PostCoverImage from "../postCoverImage";
import PostSumary from "../PostSumary";

export async function PostList() {
  const posts = await postRepository.findAllPublic();

  return (
    <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSumary
              postHeading="h2"
              postLink={postLink}
              title={post.title}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
