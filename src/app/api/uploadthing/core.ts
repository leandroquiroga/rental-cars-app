import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new UploadThingError({
      code: "FORBIDDEN",
      message: "You must be logged in to upload files.",
    })
  }

  return { userId };
};

export const ourFileRouter = {
  photo: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    }
  }).middleware(async () => handleAuth()).onUploadComplete(async ({ metadata }) => {
    return { uploadBy: metadata.userId }
  })

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;