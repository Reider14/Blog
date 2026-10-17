import PostCoverImage from "../postCoverImage";
import PostHeading from "../postHeading";
import PostSumary from "../PostSumary";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_0.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <PostSumary
        postHeading="h1"
        title="Rotina matinal de pessoas altamente eficazes"
        postLink={postLink}
        createdAt="2025-04-08T00:24:38.616Z"
        excerpt="O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        ></time>

        <PostHeading as="h1" url={postLink}></PostHeading>

        <p></p>
      </div>
    </section>
  );
}
