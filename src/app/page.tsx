import Container from "@/components/Container";
import { PostList } from "@/components/postList";
import SpeenLoader from "@/components/speenLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Container>
      <h1 className="text-6xl font-bold text-center py-8">Header</h1>

      <Suspense fallback={<SpeenLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
