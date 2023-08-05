import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumb'
import TextEditor from '../../components/TextEditor'
import { useNavigate } from 'react-router-dom'
import { REACT_APP_API_PORT } from '../../Api'
import axios from 'axios'
import Loader from '../../components/Loader'

const AboutUs = (props) => {
    const [initialContent, setInitialContent] = useState('');
    const [initialContent1, setInitialContent1] = useState('');
    const [textValue,settextValue] = useState('')
    const [textValue1,settextValue1] = useState('')
    const user = localStorage.getItem("admin");
    const admin = JSON.parse(user);
    const navigate = useNavigate();
    const [apiIsLoading, setapiIsLoading] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isDataComing,setisDataComing] = useState(false)
    const [updateId,setupdateId]=useState('')

console.log('object')
console.log(isDataComing)
    const getData = async () => {
        try {
          setisLoading(true)
            const res=await axios.get(`${REACT_APP_API_PORT}api/admin/aboutus/list`,
            {
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': admin.jwtoken
              }
            });
            console.log('sac')
             console.log(res.data.data)
           
              if(res.data.data !== null){
                setupdateId(res.data.data._id)
                settextValue(res.data.data.about_us)
                setInitialContent(res.data.data.about_us)
                setisDataComing(true)
              }else{
                setisDataComing(false)
              }
            //  setData(res.data.data)
            setisLoading(false)
        } catch (error) {
            console.log(error.response.data.message)
            // if(error.response.request.status === 500){
            //   localStorage.clear()
              props.setAlertBox(true)
              props.showAlert(error?.response?.data?.message,"red")
            //   navigate('/')
            // }
            setisLoading(false)
        }
      };
      useEffect(()=>{
        getData()
      },[])

    const handleSubmit = async (e) => {
        // console.log(formData.image[0])
   
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("about_us", textValue);
        setapiIsLoading(true);
        await axios
          .post(`${REACT_APP_API_PORT}api/admin/aboutus/create`, formdata, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": admin?.jwtoken,
            },
          })
          .then((res) => {
            setapiIsLoading(false);
            props.setAlertBox(true);
            props.showAlert(res.data.success, "green");
            getData()
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


      const handleUpdate = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("aboutUsId",updateId);
        formdata.append("about_us", textValue);
        setapiIsLoading(true);
        await axios
          .post(`${REACT_APP_API_PORT}api/admin/aboutus/update`, formdata, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": admin?.jwtoken,
            },
          })
          .then((res) => {
            setapiIsLoading(false);
            props.setAlertBox(true);
            props.showAlert(res.data.success, "green");
            getData()
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
    <h1>About Us</h1>
    <TextEditor initialValue={initialContent} settextValue={settextValue}/>  
 

    {/* <h1>Terms and condition</h1>
    <TextEditor initialValue={initialContent1} settextValue={settextValue1}/>   */}

    {
      (isDataComing!==true) 
      ? 
      <button
            // type='submit'
            onClick={handleSubmit}
              className='mt-2 inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              Save
            </button>
      :
      <button
            // type='submit'
            onClick={handleUpdate}
              className='mt-2 inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              Update
      </button>
    }
    
    </DefaultLayout>
  </>
  )
}

export default AboutUs