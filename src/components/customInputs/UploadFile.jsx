import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

const FileUploadField = ({ label, id, control, error, className }) => {
  return (
    <div className="w-full">
      <Label htmlFor={id} className="font-semibold text-lg text-gray-800 mb-2 block">
        {label}
      </Label>

      <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <div className="relative">
            <input
              id={id}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  onChange(file);
                }
              }}
              ref={ref}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />

            <div
              className={cn(
                "flex items-center p-3 h-10 border border-gray-300 rounded-[5px] bg-white",
                "hover:border-gray-400 transition-colors cursor-pointer",
                className
              )}
            >
              <Paperclip className="h-5 w-5 text-gray-500 mr-2 -rotate-45 flex-shrink-0 " />
              <span
                className="text-gray-700 text-sm truncate"
                title={value?.name || "Attach CV"}
              >
                {value?.name || "Attach CV"}
              </span>
            </div>
          </div>
        )}
      />

      {error?.message && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FileUploadField;
