import prisma from "@/lib/db/connection";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sameer Notes App - Notes",
};

const NotesPage = async () => {
  const { userId } = auth();

  if (!userId) throw Error("userId is undefined");

  const allNotes = await prisma.note.findMany({
    where: { userId },
  });
  return <div>{JSON.stringify(allNotes)}</div>;
};

export default NotesPage;
