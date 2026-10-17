import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "node:fs/promises";

const ROOT_DIR = process.cwd(); // pega o caminho

// resolve o caminho independente de qualquer SO
const JSON_POSTS_fILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json",
);

const SIMULATE_WAIT_IN_MS = 0;

// leitura e tratamento dos dados
export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  // faz a leitura dos dados
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_fILE_PATH, "utf-8"); // le os dados
    const parseJson = JSON.parse(jsonContent); // transforma a string num objeto
    const { posts } = parseJson; // destruturacao do objeto
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((posts) => posts.published);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAllPublic();

    const post = posts.find((post) => post.id === id); // procura o elemento dentro do array

    if (!post) throw new Error("Post nao encontrado - id!"); // tratamento em caso de Promise ser null/undefined

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAllPublic();

    const post = posts.find((post) => post.slug === slug); // procura o elemento dentro do array

    if (!post) throw new Error("Post nao encontrado - slug!"); // tratamento em caso de Promise ser null/undefined

    return post;
  }
}
