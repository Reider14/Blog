import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCache = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findPostBySlugCache = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostByIdCache = cache(async (id: string) => {
  return await postRepository.findById(id);
});
