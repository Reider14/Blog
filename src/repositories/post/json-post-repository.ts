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

// leitura e tratamento dos dados
export class JsonPostRepository implements PostRepository {
  // faz a leitura dos dados
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_fILE_PATH, "utf-8"); // le os dados
    const parseJson = JSON.parse(jsonContent); // transforma a string num objeto
    const { posts } = parseJson; // destruturacao do objeto
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk(); // pega o array

    const post = posts.find((post) => post.id === id); // procura o elemento dentro do array

    if (!post) throw new Error("Post nao encontrado!"); // tratamento em caso de Promise ser null/undefined

    return post;
  }
}
