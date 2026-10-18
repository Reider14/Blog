import { PostFeatured } from "@/components/postFeautured";
import { PostList } from "@/components/postList";
import SpeenLoader from "@/components/speenLoader";
import { Suspense } from "react";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <PostFeatured />

      <Suspense fallback={<SpeenLoader className="min-h-20 mb-16" />}>
        <PostList />
      </Suspense>
    </>
  );
}
