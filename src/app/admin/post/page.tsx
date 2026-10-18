import { findPostAllAdmin } from "@/lib/posts/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metada: Metadata = {
  title: "post admin",
};

export default async function AdminPostPage() {
  const post = await findPostAllAdmin();
  return (
    <div>
      {post.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
