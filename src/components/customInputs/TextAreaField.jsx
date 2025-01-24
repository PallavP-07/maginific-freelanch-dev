// TextareaField.js
import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const TextareaField = ({ label, id, rows, placeholder, register, error }) => {
  return (
    <div className="mt-8">
      <Label htmlFor={id} className="font-semibold text-lg leading-5 text-gray-800">{label}</Label>
      <Textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 p-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(id)}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default TextareaField;
