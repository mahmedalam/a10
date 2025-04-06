import { readdir } from "fs/promises";
import { resolve } from "path";

export async function GET() {
  const files = await readdir(resolve("public"), { withFileTypes: true });

  return Response.json(
    files.filter((file) => file.isFile()).map((file) => file.name),
  );
}
