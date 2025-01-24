
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const InputField = ({ label, id, type, placeholder, register, error }) => {
  return (
    <div>
      <Label htmlFor={id} className="font-semibold text-lg leading-5 text-gray-800">{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="mt-2 p-5 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(id)}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;
