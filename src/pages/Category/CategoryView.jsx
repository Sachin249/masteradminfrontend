import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios'
import moment from 'moment'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { REACT_APP_API_PORT } from '../../Api'
import DataLoading from '../../components/DataLoading'
import DataTable from 'react-data-table-component'
import SwitcherThree from '../../components/SwitcherThree'
import Swal from 'sweetalert2'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Loader from '../../components/Loader'

const CategoryView = (props) => {
    const {id}=useParams()
    console.log(id)
    const navigate=useNavigate('')
    const [data, setData] = useState({});
    const [isLoading,setisLoading]=useState(false)
    const user = localStorage.getItem("admin");
    const admin = JSON.parse(user);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState([]);
    const [apiIsLoading, setapiIsLoading] = useState(false);
// add sub category
const renderError = (message) => (
  <p className="italic text-[#dd1212]">{message}</p>
);

const validate = yup.object({
  image: yup
    .array()
    .min(1, "select at least 1 file and Maximum Size 1 Mb allowed"),
  images: yup
    .array()
    .min(1, "select at least 1 file and Maximum Size 1 Mb allowed"),
  name: yup.string().min(2).max(25).required("Category name required"),
  
});
const handleSubmit = async (e) => {
  // console.log(formData.image[0])
  console.log(formData);
  // e.preventDefault();

  const formdata = {
    categoryId:id,
    sub_category_name: formData?.name,
    image: formData?.image[0],
  };

  setapiIsLoading(true);
  await axios
    .post(`${REACT_APP_API_PORT}api/admin/subcategory/create`, formdata, {
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
      // navigate("/category/list");
      getUserList()

    })
    .catch((error) => {
      setapiIsLoading(false);
      console.log(error);
      console.log(error.response.data.errors.message);
      if(error.response.data?.errors[0]?.msg){
        props.setAlertBox(true);
        props.showAlert(error.response.data.errors[0].msg, "red");
      }
      if(error.response.data.errors){
        props.setAlertBox(true);
        props.showAlert(error.response.data.errors, "red");
      }
      
    });
};

    // get sub category list by main category details


    const [subData, setSubData] = useState([]);

    const getUserList = async () => {
      try {
        setisLoading(true)
          const res=await axios.get(`${REACT_APP_API_PORT}api/admin/subcategory/subcategoryByCategoryId/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': admin.jwtoken
            }
          });
           console.log(res.data.data)
           setSubData(res.data.data)
          setisLoading(false)
      } catch (error) {
          console.log(error.response)
          // if(error.response.request.status === 500){
          //   localStorage.clear()
            props.setAlertBox(true)
            props.showAlert(error?.response?.data?.message,"red")
          //   navigate('/')
          // }
          setisLoading(false)
      }
    };
  
  
    // user status Update
    const handleStatus = async (id,status) => {
   console.log(id)
   console.log(status)
  
      try {
       Swal.fire({
          title: 'Are you sure you want update?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#BE93D1',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
      })
      .then((result) => {
          if (result.isConfirmed) {
             return   axios.get(`${REACT_APP_API_PORT}api/admin/subcategory/statusUpdate/${id}`,
            {
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': admin.jwtoken
              }
            });
          }
        })
        .then(res=>{
          // console.log(res.data)
          if(res?.data?.sucess){
            getUserList();
            if(status==="Active"){
            
              Swal.fire(
                {
                title:'Deactive',
                text:'Deactive Successfully',
                icon:'success',
                confirmButtonColor: '#BE93D1'
              }
              )
              
            }
            else{
              
              Swal.fire(
                {
                title:'Active',
                text:'Active Successfully',
                icon:'success',
                confirmButtonColor: '#BE93D1'
              })
            
            }
          }
        })
     
      // toast.success('Updated Successfully')
      // setCountries(res.data.data)
    } catch (error) {
      console.log(error)
      if(error.response.request.status === 500){
        // localStorage.clear()
        // toast.error(error.response.data.message)
        // navigate('/')
      }
    }
    }
  
    // delete user by admin
    const handleDeleteUser = (event,id) =>{
      event.preventDefault()
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#BE93D1',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            {title:'Deleted!',
            text:'Your data has been deleted.',
            icon:'success',
            confirmButtonColor: '#BE93D1'}
          )
            return axios.get(`${REACT_APP_API_PORT}api/admin/user/delete/${id}`,{
            headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': admin.jwtoken
                  },
            })
            
        }
      })
      .then(res=>{
              console.warn('delete : '+res)
              getUserList()
        })
          .catch(error=>{
              console.log(error)
              if(error.response.request.status === 500){
                localStorage.clear()
                // toast.error(error.response.data.message)
                navigate('/')
              }
          })
      }
  
    useEffect(() => {
      getUserList();
    }, []);
    console.log(data);
    const column = [
      {
        name:<h1 className='text-lg'>Image</h1>,
        selector:(row)=><img className="w-16 h-16"
       src={`${REACT_APP_API_PORT}uploads/${row.image}`!=='' && `${REACT_APP_API_PORT}uploads/${row.image}`!== undefined?
       `${REACT_APP_API_PORT}uploads/${row.image}`:'https://bunchofdeals.com.au/APP/uploads/images/160959419922449/200_200.jpeg'}
       alt="image"
       /> ,
        sortable:true,
        // right: true,
        },
      // {
      //   name:<h1 className='text-lg'> Main Category</h1>,
      //   selector:(row)=>row?.main_category_id?.
      //   category_name,
      //   sortable:true,
      //   // right: true,
      // },
      
      {
        name:<h1 className='text-lg'>Sub Category</h1>,
        selector:(row)=>row?.sub_category_name,
        sortable:true,
        // right: true,
      },
  
      {
        name: <h1 className="text-[17px]">Status</h1>,
        selector: (row) => (
          <button 
          onClick={() => handleStatus(row?._id,row?.status)}
          >
          <SwitcherThree 
    status={
    row.status === "Active"?true:false
  }
          />
          </button>
          
        ),
        sortable: true,
        // right: true,
      },
  
  
      {
        name: <h1 className="text-[17px]">Date</h1>,
        selector:(row)=>moment(row.createdAt).format("MMM Do YY"),
        sortable: true,
        // right: true,
      },
    
   
      {
        name: <h1 className="text-[17px]">Action</h1>,
        selector: (row) => (
          <div className="flex items-center space-x-3.5">
            <button className="hover:text-primary"  onClick={()=>navigate(`/subcategory/edit/${row._id}`)} >
              <svg className="fill-current" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_62_9787)"><path d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z" fill /></g><defs><clipPath id="clip0_62_9787"><rect width={16} height={16} fill="white" /></clipPath></defs></svg>
            
            </button>
            <div className="flex flex-col mt- cursor-pointer">
            <button className="hover:text-primary"  onClick={()=>navigate(`/subcategory/view/${row._id}`)}>
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                  fill=""
                />
                <path
                  d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                  fill=""
                />
              </svg>
            </button>
            {/* <h1 className="text-[10px]">View Sub Category</h1> */}
            </div>
          </div>
        ),
        sortable: true,
        // right: true,
      },
    
    ];

    // get main category details by id 
    const getSingleUser=async()=>{
        setisLoading(true)
        await axios.get(`${REACT_APP_API_PORT}api/admin/category/show/${id}`,{
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': admin.jwtoken
          }
        })
        .then(res=>{
        //   console.log(res.data.data)
          setData(res?.data?.data)
          setisLoading(false)
        })
        .catch(error=>{
          console.log(error)
          if(error.response.request.status === 500){
            localStorage.clear()
            // toast.error(error.response.data.message)
            navigate('/')
          }
          setisLoading(false)
        })
      
      
      }




    
      useEffect(() => {
        getSingleUser();
      }, []);




  return (
  <>
     <DefaultLayout>
      {(isLoading)?(<DataLoading/>):(<>
      <Breadcrumb pageName="Sub Category List" />

{/* add sub category */}
{apiIsLoading ? <Loader /> : ""}
        <div className="mx-auto max-w-[1200px] mb-12">
          <Formik
            initialValues={{
              name: "",
              image: [],
            }}
            validationSchema={validate}
            onSubmit={(values, actions) => {
              console.log(values)
              // formData.push(values)
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
                          Add SubCategory
                        </h3>
                      </div>
                      <div className="p-7 gri grid-cols- max-w-[600px]">
                        <div className="sm:fle-ro mb-5.5 fle flex-co gap-5.5">
                          <div className="">
                            <label
                              className="mb-3 block text-sm font-medium text-black dark:text-white"
                              htmlFor="fullName"
                            >
                              Sub Category Name
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
                                placeholder="Enter SubCategory Name"
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
                             Sub Category Image
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


{/* subcategory list */}
<div className="bg-white pt-2">
      <div className='flex justify-between flex-wrap'>
      <div className='hidde s:block px-5 pt-3 flex gap-2 flex-wrap'>
          <form action='https://formbold.com/s/unique_form_id' method='POST'>
            <div className='relative'>
              <button className='absolute top-1/2 left-0 -translate-y-1/2'>
                <svg
                  className='fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary ml-2'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z'
                    fill=''
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z'
                    fill=''
                  />
                </svg>
              </button>

              <input
                type='text'
                placeholder='Type to search...'
                className='w-ful rounded-lg border border-stroke bg-transparent py-2 pl-8 pr-8 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dar:bg-form-inpu dark:focus:border-primary'
              />
            </div>
          </form>
          {/* <button>
            <Link
              to='/subcategory/add'
              className='inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-6 text-sm'
            >
              Add SubCategory
            </Link></button> */}
        </div>

        <div className='pt-3 flex gap-2 flex-wrap px-2'>
     <button>
         <Link
           to=''
           className='inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-6 text-sm'
         >
           CSV
         </Link></button>
         <button>
         <Link
           to={-1}
           className='inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-6 text-sm'
         >
           Back
         </Link></button>
     </div>
     </div>
      <div className="mt-5 dark:bg-black dark:text-white p-">
          <DataTable
            columns={column}
            data={subData}
            fixedHeader
            pagination
            fixedHeaderScrollHeight={"600px"}
            // selectableRows
            className="dark:bg-blac dark:text-whit"
            // customStyles={tableCustomStyles}
          />
        </div> 
      </div>

{/* main category details  */}
  {/* <div className="flow-root rounded-lg border border-[#c5bfbf]  py-3 shadow-sm mt-5">
  <dl className="-my-3 divide-y divide-[#c5bfbf] text-sm">
  <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-medium text-gray-900">Image</dt>
      <dd className="text-gray-700 sm:col-span-2">   <img src={`${REACT_APP_API_PORT}uploads/${data.image}` != undefined 
                          ? `${REACT_APP_API_PORT}uploads/${data.image}`
                          : "---"} alt='iamge' className='w-20 h-20'/></dd>
    </div>
    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-medium text-blac">Name</dt>
      <dd className="text-gray-700 sm:col-span-2">  
      {data.category_name != null && data.category_name !== "null"
                          ? data.category_name
                          : "---"}
                          </dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-medium text-gray-900">Status</dt>
      {(data.status==='Active')?
      <dd className="text-[#27ee3b] sm:col-span-2">
      {data.status != null && data.status !== "null"
                          ? data.status
                          : "---"}
      </dd>:
      <dd className="text-[#f84935] sm:col-span-2">
      {data.status != null && data.status !== "null"
                          ? data.status
                          : "---"}
      </dd>
      }
    </div>
    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-medium text-gray-900">Date & Time</dt>
      <dd className="text-gray-700 sm:col-span-2">{
        moment(data.createdAt).format("MMM Do YY,  h:mm:ss a")
      }</dd>
    </div>

  </dl>
</div> */}

</>)}

  </DefaultLayout>
  </>
  )
}

export default CategoryView