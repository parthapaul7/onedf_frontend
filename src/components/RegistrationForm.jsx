// src/RegistrationForm.jsx
import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import sideImg from '../assets/sideImg.jpg'
import CustomModal from './CustomModal';



const RegistrationForm = () => {

  // variables for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      panNumber: '',
      loanType: '',
      loanAmount: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      panNumber: Yup.string().required('Required'),
      loanType: Yup.string().required('Required'),
      loanAmount: Yup.number().required('Required').min(1, 'Must be greater than 0'),
    }),
    onSubmit: (values,{resetForm}) => {
      // Handle form submission
      console.log(values);
      resetForm();
      setIsModalOpen(true);
      setFormData(values);
      // alert(JSON.stringify(values));
    },
  });

  return (
    <div className='block flex'>
    <div className='w-[45vw] h-[100vh] bg-blue-100'>
      <img src={sideImg} alt="" className='h-[100vh] bg-blue-100' />
    </div>
    <div className="max-w-md min-w-[55vw] h-[100vh] block px-20 py-8 bg-blue-100 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">OneNDF Registration Form</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="panNumber" className="block text-sm font-medium text-gray-600">
            PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.panNumber}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.panNumber && formik.errors.panNumber && (
            <div className="text-red-500 text-sm">{formik.errors.panNumber}</div>
          )}
        </div>

        <div>
          <label htmlFor="loanType" className="block text-sm font-medium text-gray-600">
            Type of Loan Required
          </label>
          <input
            type="text"
            id="loanType"
            name="loanType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.loanType}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.loanType && formik.errors.loanType && (
            <div className="text-red-500 text-sm">{formik.errors.loanType}</div>
          )}
        </div>

        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-600">
            Loan Amount
          </label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.loanAmount}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.loanAmount && formik.errors.loanAmount && (
            <div className="text-red-500 text-sm">{formik.errors.loanAmount}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    {/* code for modal  */}
    <CustomModal isOpen={isModalOpen} closeModal={closeModal} formData={formData} />
    </div>
  );
};

export default RegistrationForm;