import Image from "next/image";

import logo from "@/assets/sameer.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt="sameer-logo"
          width={200}
          height={200}
          className="rounded-full"
        />
        <span className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Sameer&apos;s - Smart Note Taking App
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent Note taking app with AI integration, OpenAI, Pinecone,
        Nextjs, Shadcn, Clerk, Prisma, MongoDB
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
