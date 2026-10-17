import { PostFeatured } from "@/components/postFeautured";
import { PostList } from "@/components/postList";
import SpeenLoader from "@/components/speenLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <PostFeatured />

      <Suspense fallback={<SpeenLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
