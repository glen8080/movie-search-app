import React from 'react'
import '../main.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'



function Registration() {
     
   
     const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values,null,2))
            
        },
        validationSchema:Yup.object({
            firstName:Yup.string().max(15,"must have 15 letters or less").required("first name is required!!"),
            lastName:Yup.string().max(15," must have atleast 15 or less").required("last name is required!!"),
            email:Yup.string().email("invalid email").required("email is required!!")
        })
     })


  
  
    
  return (
    <div>
        <div className='registration-container'>
            <div className='inner-container'>
                <form onSubmit={formik.handleSubmit}>
                <input placeholder='first name' type="text" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
                {formik.touched.firstName && formik.errors.firstName ? <p className='error'>{formik.errors.firstName}</p>: null}
                <input placeholder='last name' type="text"  onChange={formik.handleChange} name="lastName" onBlur={formik.handleBlur}  value={formik.values.lastName}/>
                {formik.touched.lastName && formik.errors.lastName ? <p className='error'>{formik.errors.lastName}</p>: null}
                <input placeholder='email' type="email" onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p>: null}
                 <button type='submit' >submit</button>
               
                </form>

              
            </div>
        </div>
    </div>
  )
}

export default Registration