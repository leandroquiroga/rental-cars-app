"use client"
import { useState } from "react";
import { cn } from "@/lib/utils"; 
import { LoaderIcon } from "lucide-react"; 
import { UploadDropzone } from "@/utils/uploadthing";
import { ResponseUpdropZone, UploadDropZoneProps } from "@/interfaces";

export const UploadDropZone = ({
  endpoint,
  buttonText = "Upload stuff",
  onUploadComplete,
  onUploadError,
  effectiveTheme,
}: UploadDropZoneProps) => {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const baseButtonStyles = cn(
    "w-full p-3 rounded-md font-medium text-center transition-colors duration-150 cursor-pointer",
    effectiveTheme === "dark"
      ? "bg-white text-gray-900 hover:bg-gray-300"
      : "bg-gray-900 text-white hover:bg-gray-800"
  );
  return (
    <UploadDropzone
      className={cn(
        "w-full border-2 border-dashed rounded-xl p-4 transition-all duration-200",
        effectiveTheme === "dark"
          ? "border-amber-100 bg-blend-darken hover:border-gray-500"
          : "border-gray-300 bg-gray-50 hover:border-gray-400"
      )}
      content={{
        button({ ready, isUploading }) {
          if (!ready || isUploading) {
            return (
              <div
                className={cn(
                  baseButtonStyles,
                  "cursor-not-allowed opacity-75"
                )}
              >
                <LoaderIcon className="animate-spin mx-auto" size={24} />
              </div>
            );
          }
          return (
            <div className={baseButtonStyles} role="button">
              {uploadSuccess ? "Change image" : buttonText}
            </div>
          );
        },
        label({ ready, isUploading }) {
          return (
            <div className={cn(
              "text-sm font-medium",
              effectiveTheme === "dark" ? "text-white" : "text-gray-600",
              !ready && "text-gray-400",
              isUploading && "text-gray-500",
              uploadSuccess && "text-green-500",
              uploadError && "text-red-500"
            )}>
              
                {(uploadError) && <span className="text-red-500">{uploadError}</span>}
                {(uploadSuccess) && "Upload completed!"}
                {(!ready) ? "Checking what you allow" : (!uploadSuccess) && "You can upload files here"}
                {(isUploading) && "Seems like stuff is uploading"}
          
            </div>)

        },
        allowedContent({ ready, isUploading }) {
          if (uploadError) return <span className="text-red-500">{uploadError}</span>;
          if (uploadSuccess) return "Great!";
          if (isUploading) return "Seems like stuff is uploading";
          return !ready ? "Checking what you allow" : 'You can upload files here';
        },
      }}
      endpoint={endpoint}
      onClientUploadComplete={(res: ResponseUpdropZone) => {
        console.log({res})
        if (res && res[0]?.ufsUrl) {
          onUploadComplete(res[0].ufsUrl);
          setUploadSuccess(res[0].ufsUrl);;
          setUploadError(null);
        } else {
          const error = new Error("Unexpected response format");
          console.log(error);
          setUploadError(error.message);
          onUploadError(error);
        }
      }}
      onUploadError={(error: Error) => {
        setUploadError(error.message);
        setUploadSuccess(null);
        onUploadError(error);
      }}
    />
  );
};