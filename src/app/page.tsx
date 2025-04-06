import { baseUrl } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(`${baseUrl}/api/images`);
  const images = await response.json();

  return (
    <main className="my-8 mx-4 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-center">Image Gallery</h1>

      <div className="flex flex-col gap-4">
        {images.map((image: string) => (
          <Link href={`/${image}`} target="_blank" key={image}>
            <Image
              className="rounded shadow"
              src={`/${image}`}
              alt={image}
              width={1080}
              height={1080}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
