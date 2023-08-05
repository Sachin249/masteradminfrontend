import { useEffect, useState } from "react";
import DefaultLayout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumb'
import DataTable from 'react-data-table-component'
import moment from 'moment';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API_PORT } from "../../Api";
import DataLoading from "../../components/DataLoading";
import SwitcherThree from "../../components/SwitcherThree";
import Swal from "sweetalert2";
import user1 from '../../images/user/user-01.png'
const CategoryList = (props) => {

    const navigate=useNavigate()
    const [data, setData] = useState([]);
    const [isLoading,setisLoading]=useState(false)
    const user = localStorage.getItem("admin");
    const admin = JSON.parse(user);
      // get users list 
  const getUserList = async () => {
    try {
      setisLoading(true)
        const res=await axios.get(`${REACT_APP_API_PORT}api/admin/category/list`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': admin.jwtoken
          }
        });
         console.log(res.data.data)
         setData(res.data.data)
        setisLoading(false)
    } catch (error) {
        console.log(error.response)
        // if(error.response.request.status === 500){
        //   localStorage.clear()
        //   props.setAlertBox(true)
        //   props.showAlert(error?.response?.data?.message,"red")
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
           return   axios.get(`${REACT_APP_API_PORT}api/admin/category/statusUpdate/${id}`,
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
      localStorage.clear()
      // toast.error(error.response.data.message)
      navigate('/')
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
      selector:(row)=> 
      <div>
      {
       (row.image && row.image !== "")
       ?
       <img className="w-16 h-16 rounded-full"
               src={`${REACT_APP_API_PORT}uploads/${row.image}`  } alt="image"
               />
       :
       <img className="w-16 h-16 rounded-full"
               src='data:image/jpeg;base64,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' alt="image"
               />
      }
     
      </div> ,
      sortable:true,
      // right: true,
      },
    {
      name:<h1 className='text-lg'> Name</h1>,
      selector:(row)=>row.category_name,
      sortable:true,
      // right: true,
    },
    
    // {
    //   name: <h1 className="text-[17px]">Status</h1>,
    //   selector: (row) => (
    //     <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
    //       Active
    //     </p>
    //   ),
    //   sortable: true,
    //   // right: true,
    // },

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
      // conditionalCellStyles: [
      //   {
      //       when: row => row.status == "Active",
      //       style: {
      //           color: 'green',
      //       },
      //   },
      //   {
      //     when: row => row.status == "Deactive",
      //     style: {
      //         color: 'red',
      //     },
      // },
      // ],
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
          {/* <button className="hover:text-primary"  onClick={()=>navigate(`/category/view/${row._id}`)}>
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
          </button> */}
          <button className="hover:text-primary"  onClick={()=>navigate(`/category/edit/${row._id}`)} >
            {/* <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                fill=""
              />
              <path
                d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                fill=""
              />
              <path
                d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                fill=""
              />
              <path
                d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                fill=""
              />
            </svg> */}
            <svg className="fill-current" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_62_9787)"><path d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z" fill /></g><defs><clipPath id="clip0_62_9787"><rect width={16} height={16} fill="white" /></clipPath></defs></svg>
          
          </button>
          <div className="flex flex-col mt-3 cursor-pointer">
          <button className="hover:text-primary"  onClick={()=>navigate(`/category/view/${row._id}`)}>
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
          <h1 className="text-[10px]">View Sub Category</h1>
          </div>
        </div>
      ),
      sortable: true,
      // right: true,
    },
  
  ];
  return (
  <>
    <DefaultLayout>
    {isLoading?(<DataLoading/>):(<>
  <Breadcrumb pageName="CategoryList" />
  {/* <img src={user1} alt=""/> */}
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
          <button>
            <Link
              to='/category/add'
              className='inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-6 text-sm'
            >
              Add Category
            </Link></button>
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
            data={data}
            fixedHeader
            pagination
            fixedHeaderScrollHeight={"600px"}
            // selectableRows
            className="dark:bg-blac dark:text-whit"
            // customStyles={tableCustomStyles}
          />
        </div> 
      </div>
</>)}

    </DefaultLayout>
  </>
  )
}

export default CategoryList