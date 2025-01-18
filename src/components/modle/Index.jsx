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
                <div className="bg-white p-6 w-auto rounded-lg shadow-lg  relative">
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
                        <div className="w-full mb-2">
                            <Label htmlFor="cv" className="font-semibold text-[16px] leading-4 text-gray-800">*CV and/or Cover letter</Label>
                            <Input type="file" id="cv" name="cv" accept=".pdf,.doc" onChange={handleFileChange} className="w-full border p-2 mt-2" />
                            {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
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