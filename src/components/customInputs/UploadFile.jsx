// FileUploadField.js
import React from 'react';
import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { AttachIcon } from '@/assets/Icons';

const FileUploadField = ({ label, id, control, error }) => {
  return (
    <div className="relative">
      <Label htmlFor={id} className="font-semibold text-lg leading-5 text-gray-800">{label}</Label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <div>
            <input
              type="file"
              id={id}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  field.onChange(file); 
                }
              }}
            />
            <label
              htmlFor={id}
              className="mt-2 p-[8px] w-full cursor-pointer inline-block border border-gray-300 rounded-[5px] hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              <span className="ml-8 text-[#bcbcbc] text-sm">{field.value?.name || "Drag & Drop or Select"}</span>
              <AttachIcon className="absolute bottom-[11px] left-[10px]" />
            </label>
          </div>
        )}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FileUploadField;
