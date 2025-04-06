import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
  ];

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
