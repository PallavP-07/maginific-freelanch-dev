"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const Modle = ({ isOpen, closeModal, onSubmit }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cv: null,
    });

    // State variables for validation errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        cv: '',
    });

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle CV file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            if (fileExtension === 'pdf' || fileExtension === 'doc') {
                setFormData((prevData) => ({
                    ...prevData,
                    cv: file,
                }));
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    cv: '', // Clear any previous error
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    cv: 'Please upload a PDF or DOC file.',
                }));
            }
        }
    };

    // Validation function for form fields
    const validateForm = () => {
        let formIsValid = true;
        let newErrors = { name: '', email: '', phone: '', cv: '' };

        if (!formData.name) {
            formIsValid = false;
            newErrors.name = 'Name is required.';
        }

        if (!formData.email) {
            formIsValid = false;
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            newErrors.email = 'Email is invalid.';
        }

        if (!formData.phone) {
            formIsValid = false;
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formIsValid = false;
            newErrors.phone = 'Phone number is invalid.';
        }

        if (!formData.cv) {
            formIsValid = false;
            newErrors.cv = 'CV is required.';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    // Handle Apply button click
    const handleApply = () => {
        if (validateForm()) {
            // Send the form data back to the parent component
            onSubmit(formData);
            // Optionally reset the form data after submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                cv: null,
            });
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
                <div className="bg-white p-12 w-[400px] md:w-[640px] lg:w-auto rounded-lg shadow-lg  relative">
                    <button onClick={closeModal} className="absolute top-5 right-6 text-gray-600 text-lg hover:text-gray-900">
                        ✖
                    </button>
                    <h2 className="text-xl font-bold leading-7 text-gray-800 mb-5">Your Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                        {/* Name, Email, Phone, and CV Fields */}
                        <div className="w-full mb-2">
                            <Label htmlFor="name" className="font-semibold text-[16px] leading-4 text-gray-800">*Name</Label>
                            <Input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} className="w-full border p-2 mt-2" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="w-full mb-2">
                            <Label htmlFor="email" className="font-semibold text-[16px] leading-4 text-gray-800">*Email</Label>
                            <Input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} className="w-full border p-2 mt-2" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="w-full mb-2">
                            <Label htmlFor="phone" className="font-semibold text-[16px] leading-4 text-gray-800">*Phone</Label>
                            <Input type="text" id="phone" name="phone" placeholder="Enter your phone" value={formData.phone} onChange={handleInputChange} className="w-full border p-2 mt-2" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="relative w-full mb-2">
                            <Label htmlFor="document" className="font-semibold text-lg leading-5 text-gray-800">
                                *CV and/or Cover letter
                            </Label>
                            <Input
                                className="hidden"
                                type="file"  onChange={handleFileChange}
                            />
                           
                           {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
                            <label
                                htmlFor="document"
                                className="mt-2 p-[5px] w-full cursor-pointer inline-block border border-gray-300  rounded-[5px] hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 transition duration-200"
                            >
                                <span className="ml-8 text-[#D0D0D0]">Drag & Drop or Select</span>
                            </label>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 13 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute  bottom-[9px] left-[10px]"
                            >
                                <path
                                    d="M4.04062 7.48437V15.3512C4.04971 15.9264 4.28461 16.475 4.69463 16.8786C5.10464 17.2822 5.6569 17.5084 6.23223 17.5084C6.80755 17.5084 7.35981 17.2822 7.76983 16.8786C8.17984 16.475 8.41474 15.9264 8.42383 15.3512L8.43094 5.03984C8.4369 4.54816 8.34521 4.06019 8.16118 3.60421C7.97715 3.14823 7.70444 2.73332 7.35886 2.38352C7.01328 2.03372 6.60171 1.756 6.148 1.56645C5.69428 1.3769 5.20746 1.2793 4.71574 1.2793C4.22403 1.2793 3.7372 1.3769 3.28349 1.56645C2.82978 1.756 2.4182 2.03372 2.07262 2.38352C1.72704 2.73332 1.45433 3.14823 1.2703 3.60421C1.08627 4.06019 0.994581 4.54816 1.00055 5.03984V15.4206C0.990529 16.1128 1.11822 16.8001 1.37618 17.4425C1.63415 18.085 2.01725 18.6697 2.50321 19.1627C2.98918 19.6558 3.5683 20.0473 4.20693 20.3146C4.84555 20.5818 5.53092 20.7194 6.2232 20.7194C6.91548 20.7194 7.60086 20.5818 8.23948 20.3146C8.8781 20.0473 9.45723 19.6558 9.94319 19.1627C10.4292 18.6697 10.8123 18.085 11.0702 17.4425C11.3282 16.8001 11.4559 16.1128 11.4459 15.4206V5.72015"
                                    stroke="#737475"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                            
                        </div>
                    </div>
                    <Button onClick={handleApply} className="px-8 py-2 my-6 bg-[#026534] text-white w-full md:w-24 rounded-[3px] text-[16px] leading-5 font-semibold">
                        Apply
                    </Button>
                </div>
            </div>
        )
    );
}

export default Modle