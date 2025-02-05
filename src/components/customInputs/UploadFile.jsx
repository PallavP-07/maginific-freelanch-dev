import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import { AttachIcon } from "@/assets/Icons";

const FileUploadField = ({ label, id, control, error, className }) => {
  return (
    <div className="relative">
      <Label
        htmlFor={id}
        className="font-semibold text-lg leading-5 text-gray-800 mb-2"
      >
        {label}
      </Label>
      <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <>
            <div className="relative mt-2 p-3 h-10 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                id={id}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    onChange(file);
                  }
                }}
                className=" opacity-0 cursor-pointer "
                ref={ref}
              />
              <div
                className={cn(
                  "flex items-center  cursor-pointer absolute top-3 left-2",
                  className
                )}
              >
                <Paperclip className="h-5 w-5 text-gray-500 mr-2 -rotate-45" />
                <span className="text-gray-500 text-sm">
                  {value?.name || "Attach CV"}
                </span>
              </div>
            </div>
          </>
        )}
      />
      {error?.message && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FileUploadField;
