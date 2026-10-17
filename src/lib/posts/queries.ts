import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPostsCache = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findPostBySlugCache = cache(async (slug: string) => {
  return await postRepository.findBySlug(slug);
});

export const findPostById = cache(async (id: string) => {
  return await postRepository.findById(id);
});
