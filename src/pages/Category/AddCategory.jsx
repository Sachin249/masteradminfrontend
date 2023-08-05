import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { REACT_APP_API_PORT } from "../../Api";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import axios from "axios";
const AddCategory = (props) => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState(null);
  const user = localStorage.getItem("admin");
  const admin = JSON.parse(user);
  const navigate = useNavigate();
  const [apiIsLoading, setapiIsLoading] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const renderError = (message) => (
    <p className="italic text-[#dd1212]">{message}</p>
  );

  const validate = yup.object({
    // image: yup
    //   .array()
    //   .min(1, "select at least 1 file and Maximum Size 1 Mb allowed"),
    // images: yup
    //   .array()
    //   .min(1, "select at least 1 file and Maximum Size 1 Mb allowed"),
    name: yup.string().min(2).max(25).required("Category name required"),
    
  });
  const handleSubmit = async (e) => {
    // console.log(formData.image[0])
    console.log(formData);
    // e.preventDefault();

    const formdata = {
      category_name: formData.name,
      image: formData.image[0],
    };

    setapiIsLoading(true);
    await axios
      .post(`${REACT_APP_API_PORT}api/admin/category/create`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": admin?.jwtoken,
        },
      })
      .then((res) => {
        setapiIsLoading(false);
        // console.log(res);
        props.setAlertBox(true);
        props.showAlert(res.data.success, "green");
        navigate("/category/list");
      })
      .catch((error) => {
        setapiIsLoading(false);
        console.log(error);
        console.log(error.response.data.errors.message);
        if(error.response.data.errors[0].msg){
          props.setAlertBox(true);
          props.showAlert(error.response.data.errors[0].msg, "red");
        }
        if(error.response.data.errors){
          props.setAlertBox(true);
          props.showAlert(error.response.data.errors, "red");
        }
        
      });
  };
  return (
    <>
      <DefaultLayout>
        {apiIsLoading ? <Loader /> : ""}
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Add Category" />
          <Formik
            initialValues={{
              name: "",
              image: [],
            }}
            validationSchema={validate}
            onSubmit={(values, actions) => {
              setFormData(values);
              handleSubmit();
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="grid grid-cols-1">
                  <div className="col-span-5 xl:col-span-3">
                    <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                          Add Category
                        </h3>
                      </div>
                      <div className="p-7 gri grid-cols- max-w-[600px]">
                        <div className="sm:fle-ro mb-5.5 fle flex-co gap-5.5">
                          <div className="">
                            <label
                              className="mb-3 block text-sm font-medium text-black dark:text-white"
                              htmlFor="fullName"
                            >
                              Category Name
                            </label>
                            <div className="relative">
                              <span className="absolute left-4.5 top-4">
                                <svg
                                  className="fill-current"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g opacity="0.8">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                      fill=""
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                      fill=""
                                    />
                                  </g>
                                </svg>
                              </span>
                              <Field
                                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                name="name"
                                // id='fullName'
                                placeholder="Enter Category Name"
                                defaultValue="Devid Jhon"
                              />
                            </div>
                            <ErrorMessage name="name" render={renderError} />
                          </div>

                      
                        </div>


                     
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 xl:col-span-2 ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                   
                      <div className="p-7 max-w-[600px]">
                        <div className="mb-4 flex items-center gap-3">
                  
                          <div>
                            <span className="mb-1.5 text-black dark:text-white">
                              Category Image
                            </span>
                          </div>
                        </div>

                        <div
                          id="FileUpload"
                          className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            name="image"
                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            onChange={(event) => {
                              let img = event.target.files[0];
                              let imgSize = img.size;
                              const sizeAllowed = 900 * 1024;
                              if (imgSize > sizeAllowed) {
                                setError({
                                  mass: "Image Maximum  Size 900kb  allowed",
                                });
                              } else {
                                const files = event.target.files;
                                let myFiles = Array.from(files);
                                setFieldValue("image", myFiles);
                                setError({});
                              }
                            }}
                          />
                          <div className="flex flex-col items-center justify-center space-y-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                  fill="#3C50E0"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                  fill="#3C50E0"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                  fill="#3C50E0"
                                />
                              </svg>
                            </span>
                            <p>
                              <span className="text-primary">
                                Click to upload
                              </span>{" "}
                     
                            </p>
                       
                            {values.image[0] && (
                              <img
                                src={
                                  values.image[0]
                                    ? URL.createObjectURL(values?.image[0])
                                    : ""
                                }
                                alt="User"
                                className="h-48 w-48 rounded-full"
                              />
                            )}
                          
                          </div>
                        </div>
                        <ErrorMessage name="image" render={renderError} />

                        <p className="mt-2 font-semibold text-[#8d0d0d]">
                          {error.mass}
                        </p>

                        <div className="ga-4.5 flex w-full justify-center">
                          <button
                          
                            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </DefaultLayout>
    </>
  );
};

export default AddCategory;
