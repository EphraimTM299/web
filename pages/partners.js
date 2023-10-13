import { useForm } from "react-hook-form";
import { useMemo } from "react"
import Container from "../components/container";
import benefitOneImg from "../public/img/benefit-one.png";
import Image from "next/image";
import * as React from "react"
import { useAuth } from "../firebase/auth/AuthContext";
import {auth} from "../firebase/initFirebase"
import { GeoPoint, addDoc,Timestamp, collection, getFirestore} from 'firebase/firestore';
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import Layout from "../components/Layout/Layout";
import {
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from "react";
import SearchBox from "../components/searchbox";

const dbx= getFirestore();


const Partner = () => {

   const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { register,setValue, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  
  const [setError,  errors ]=useState(false);
  const signUp  = useAuth();

    async function sendData (userUId,name,address, city,email,userRole, laundryType, userName,userPhone,province, numberOfLocations , lat, lng, terms, pricelist) {

     try {
        addDoc(collection(dbx, 'laundromatTest'), {
         name: name,
         rating: 0,
         accountCreated: Timestamp.now(),
         address: address,
         city: city,
         province:province,
         distance: 0,
         location: new GeoPoint(lat, lng),
         special_offers: "",
         status: 'Inactive',
         turnaround: 24,
         deliveryPrice: 0,
         imagePath: "",
         email:email,
         userUid: userUId,
         userPhone: userPhone,
         userEmail:email,
         userName:  userName,
         laundryType: laundryType,
         userRole: userRole,
         numberOfLocations:numberOfLocations,
         termsAccepted:terms,
        //  pricelist:pricelist
       }).then(result => alert("SignUp Complete"));
     } catch (error) {
       alert(error.message);
     }
   }

   async function createLaundryUser (userUId,userName,name,email,userRole,userPhone,terms) {

    try {
       addDoc(collection(dbx, 'laundryUsersTest'), {
        laundromatName: name,
        accountCreated: Timestamp.now(),
        email:email,
        uid: userUId,
        userPhone: userPhone,
        userEmail:email,
        userName:userName,
        userRole: userRole,
        termsAccepted:terms,
       //  pricelist:pricelist
      }).then(result => alert("User Added"));
    } catch (error) {
      alert(error);
    }
  }

  const onSubmit = async (data, event) => {
 

    try {
			 await createUserWithEmailAndPassword(auth,data.email, data.password).then(UserCredential =>
        
        sendData(
        UserCredential.user.uid,
        data.businessName,
        data.businessAddress,
        data.city,
        // data.turnaround,
        data.email,
        data.role,
        data.laundryType,
        data.firstName,
        data.phone,
        data.province,
        data.numberOfLocations,
        data.latitude,
        data.latitude,
        data.termsAccepted,
        // data.pricelist

         )).then((result)=>{
        
         })
        
        
         
		} catch (error) {
			alert(error);
		}
    
    // data.preventDefault();
    console.log("data",data.email);
    console.log(event);
    // throw new Error();
  
  } 

  return (
    <>
    <Layout>
      <div
      className="max-w-screen-xl mt-20 px-8 xl:px-16 mx-auto"
      
    ></div>
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>

      <Container className="flex flex-wrap xl:m-24 lg:m-24 m-4">
          <div className="flex items-center w-full lg:w-1/2">
            
           
            
          
              <div className="p-16"> 
              <Image
                src={benefitOneImg}
                          
                alt="Partner with teillo"
                loading="eager"
                placeholder="blur"
                />
                 
        
              </div>
        </div>
       
        <div className="flex flex-col items-center sm:py-6 py-6 px-6 sm:px-6 sm:flex-col justify-center w-full xl:w-1/2 sm:w-full md:w-full bg-blue-600 text-white-500 rounded-2xl ">
        
                <h2 className="text-2xl font-bold mb-2 mr-2">
                   Register your Business
                </h2>
           <p className="mb-5"> We understand that change is not easy, Let's start this amazing Journey</p>
         

  <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>


  <div className="w-full md:w-1/2 mb-6 md:mb-6">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" htmlFor="grid-state">
      Role      </label>
      <div className="relative">
        <select {...register("role", {  required: true,  })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-role">
          <option>Manager</option>
          <option>Owner</option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white-500">
          
        </div>
      </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white-500 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input {...register("firstName", { required: true, 
         
         }
         )} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500" id="grid-first-name" type="text" placeholder="First Name"/>
     

      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white-500 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input {...register("lastName", {  required: true, })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
    
     

    </div>
    
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white-500 text-xs font-bold mb-2" htmlFor="grid-email">
        Email Address
      </label>
      <input {...register("email", { required: true,  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500" id="grid-email" type="text" placeholder="Email"/>
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white-500 text-xs font-bold mb-2" htmlFor="grid-last-name">
       Password
      </label>
      <input {...register("password", {  required: true,  })} id="grid-password" htmlFor="grid-password" type="password" className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" placeholder="Password"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3 mt-4 md:mb-0">
      <label className="block uppercase tracking-wide text-white-500 text-xs font-bold mb-2" htmlFor="grid-phone-number">
        Phone Number
      </label>
      <input {...register("phone", { required: true,  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500" id="grid-phone-number" type="tel" placeholder="Phone Number"/>
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" >
        Business Address
      </label>  
      <SearchBox {...register("businessAddress")}{...register("latitude")} {...register("longitude")} onSelectAddress={(address, latitude, longitude )=>{
      setValue ("businessAddress", address)
      setValue ("latitude", latitude)
      setValue ("longitude", longitude)
    }}
    defaultValue=""/>
      
    </div>
   
    
  </div>
  <div className="flex flex-wrap -mx-3  mb-8 mt-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" htmlFor="grid-business">
        Business Name
      </label>
      <input {...register("businessName", {required:true})}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-business" type="text" placeholder="Business Name"/>
     
    </div>
   
    <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" htmlFor="grid-state">
      Business Type </label>
      <div className="relative">
        <select {...register("laundryType", {  required: true,  })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-business-type">
           <option>Sneaker Care</option>
          <option>Dry Cleaner</option>
          <option>Laundromat</option>
          <option>Carpet Cleaner</option>
          <option>Laundromat & Dry Cleaner</option>
         
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white-500">
         
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" htmlFor="grid-state">
      Locations      </label>
      <div className="relative">
        <select {...register("numberOfLocations", {  required: true,  })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-location">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5 or More</option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white-500">
         
        </div>
      </div>
    </div>
    
    </div>
  
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input {...register("city", {  required: true,  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-city" type="text" placeholder="City"/>
      
   
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide  text-white-500 text-xs font-bold mb-2" htmlFor="grid-state">
      Province      </label>
      <div className="relative">
        <select {...register("province", {  required: true,  })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-state">
          <option>Eastern Cape</option>
          <option>Free State</option>
          <option>Gauteng</option>
          <option>KwaZulu-Natal</option>
          <option>Limpopo</option>
          <option>Mpumalanga</option>
          <option>Northern Cape</option>
          <option>North West</option>
          <option>Western Cape</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white-500">
        
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white-500 text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input {...register("zip", {required: true, message:"error" , ErrorMessage:"something is wrong" }) }className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-500" id="grid-zip" type="text" placeholder="Zip Code"/>
      
    </div>
    
    </div>
    {/* input file */}

    <label className="block mb-4 mt-4 text-sm font-medium text-white-500 dark:text-white-500" htmlFor="file_input">Upload Pricelist</label>
    <input {...register("pricelist", {  required: true,  }) } className="block w-full text-sm text-gray-900 border border-white-500  cursor-pointer bg-gray-50  focus:outline-none " aria-describedby="file_input_help" id="file_input" type="file"/>
    <p className="mt-2 mb-2 text-xs text-white-500 dark:text-gray-300" id="file_input_help">PNG, JPG(MAX. 800x400px).</p>


    {/* input file ends here */}

   

{/* terms accepted */}
    <div className="flex items-center rounded-xl mt-4">
    <input {...register("termsAccepted", {  required: true,  }) } id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded-xl focus:ring-gray-900  focus:ring-2 "/>
  <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-white-500 dark:text-gray-300"><a className="text-gray-300 dark:text-white-500 hover:underline">Accept Terms and Conditions</a></label>
    
    </div>

    {/* terms accepted */}

{/* submit buttom */}
    <div className="w-full md:w-1/3 pr-3 pl-0 mb-6 mt-5 md:mb-0">
     
      <input type="submit"  className= "border-2 border-white-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-white-500 hover:text-blue-500" />
    </div>
{/* submit buttom */}
</form>
        
   </div>
     {/* </div> */}
  </Container>
  </motion.div>
  </ScrollAnimationWrapper>
  
      </Layout>
    </>
  );
}

export default Partner;