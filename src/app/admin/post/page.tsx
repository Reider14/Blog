import PostsListAdmin from "@/components/PostListAdmin";
import SpeenLoader from "@/components/speenLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metada: Metadata = {
  title: "post admin",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpeenLoader className="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
