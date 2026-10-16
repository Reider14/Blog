import Container from "@/components/Container";
import Header from "@/components/Header";
import PostCoverImage from "@/components/postCoverImage";
import PostHeading from "@/components/postHeading";
import { PostList } from "@/components/postList";
import SpeenLoader from "@/components/speenLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_0.png",
            alt: "image alt",
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>
          <PostHeading url="#">
            Consectetur perferendis beatae esse, magni?
          </PostHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eaque
          labore debitis quos aspernatur nihil a reiciendis quae voluptates
          dignissimos rerum cupiditate nobis voluptatibus consectetur
          perferendis beatae esse, magni praesentium?
        </div>
      </section>

      <Suspense fallback={<SpeenLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
