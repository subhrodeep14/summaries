
"use client";
import UploadFormInput from "./UploadFormInput";
import { z } from "zod";
import { useState } from "react";
import { log } from "console";
import { useUploadThing } from "@/utils/uploadthing";

const schema = z.object({
  file: z.instanceof(File, { message: 'Invalid file' }).refine((file) => file.type === "application/pdf", {
    message: "File must be a PDF",
  }).refine((file) => file.size <= 20 * 1024 * 1024, { // 5MB limit
    message: "File size exceeds 20MB",
  }),
})

export default function UploadForm() {

  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      console.log('Upload Completed!');

    },
    onUploadError: (error) => {
      console.error(`Upload failed: ${error.message}`);
    },
    onUploadBegin(file) {
      console.log("Upload started:", file);
    },
  });



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // Handle the form submission logic here
  console.log("Form data submitted:");

  const formData = new FormData(e.currentTarget);
  const file = formData.get("file") as File;

  const validationResult = schema.safeParse({ file });
  if (!validationResult.success) {
    console.log(validationResult.error.flatten().fieldErrors.file?.[0] ?? "Invalid file");

    return;
  }


  const resp = await startUpload([file])
  if (resp) {
    console.log("Upload successful:", resp);
  }
  else {
    console.log("Upload failed");
    return;
  }
  };

return (
  <div className="flex flex-col items-center justify-center gap-8 w-full max-w-2xl mx-auto p-6  rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white/30 backdrop-blur-sm border border-gray-200">
    <UploadFormInput onSubmit={handleSubmit} />

  </div>
);
}