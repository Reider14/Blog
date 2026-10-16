import Container from "@/components/Container";
import Header from "@/components/Header";
import { PostFeatured } from "@/components/postFeautured";
import { PostList } from "@/components/postList";
import SpeenLoader from "@/components/speenLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <PostFeatured />

      <Suspense fallback={<SpeenLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
