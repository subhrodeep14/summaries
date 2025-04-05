
"use client";
import UploadFormInput from "./UploadFormInput";
import { z } from "zod";
import { useState } from "react";

const schema = {
    file: z.instanceof(File).refine((file) => file.type === "application/pdf", {    
        message: "File must be a PDF",
    }),
}

export default function UploadForm() {

    const handleSubmit =  (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle the form submission logic here
        console.log("Form data submitted:");

        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        //validate file type
        if (file && file.type !== "application/pdf") {
            alert("Please upload a PDF file.");
            return;
        }
        //validate file size
        if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
            alert("File size exceeds 5MB. Please upload a smaller file.");
            return;
        }
        // Process the file upload here 
        console.log("File uploaded:", file.name);
        // You can also send the file to your server or API endpoint here
        // For example, using fetch or axios:
        // const formData = new FormData();
        // formData.append("file", file);
        // fetch("/api/upload", {
        //   method: "POST",
        //   body: formData,
        // })   
        // .then((response) => response.json())
        // .then((data) => console.log("File uploaded successfully:", data))


        // .catch((error) => console.error("Error uploading file:", error));
        // Reset the form after submission
        e.currentTarget.reset();
        // Optionally, you can also show a success message to the user
        // alert("File uploaded successfully!");
        // Or redirect the user to another page
        // window.location.href = "/success"; // Redirect to a success page
        // Or update the UI to show the uploaded file







        // Example: Display the uploaded file name in the console
        // console.log("Uploaded file:", file.name);    

    };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-2xl mx-auto p-6  rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white/30 backdrop-blur-sm border border-gray-200">
      <UploadFormInput onSubmit={handleSubmit} />
    
    </div>
  );
}