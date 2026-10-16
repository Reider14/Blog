import { postRepository } from "@/repositories/post";
import PostCoverImage from "../postCoverImage";
import PostHeading from "../postHeading";
import { formatDatetime } from "@/utils/formated-datetime";

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{ href: `/post/post.slug` }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm/tight"
                dateTime={post.createdAt}
              >
                {post.createdAt}
                {formatDatetime(post.createdAt)}
              </time>
              <PostHeading url="#">{post.title}</PostHeading>
              {post.excerpt}
            </div>
          </div>
        );
      })}
    </div>
  );
}
