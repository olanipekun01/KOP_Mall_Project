import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SignUp = () => {
  return (
    <>
        <div className="flex flex-row ">
            <div className="w-[100%] left_wrapper lg:w-[50%] bg-[#25133A] px-7 lg:px-[7%] py-[50px]">
                <div className="">
                    <h1 className='text-[20px] font-weight-700 mb-[30px] text-[#FFFFFF] '>KOP Mall</h1>
                    <div className=" mb-[20px]">
                        <h3 className='text-[20px] font-weight-700 mb-[10px] text-[#FFFFFF]'>Create your account</h3>
                        <p className='text-[12px] font-weight-400 text-[#FFFFFF] lg:text-[16px] '>Welcome! Select a method to create your account</p>
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
                        <button className="btn rounded-[10px] bg-transparent text-white w-[100%] lg:w-[47%] font-weight-400
                         text-[16px] lg:text-[12px] border-[1px] border-[#ffff] hover:text-[#25133A] hover:bg-[#ffff]">
                            <img src="assets/devicon_google.png" className='lg:w-[15px]' alt="" />
                            Sign up with Google
                        </button>
                        <button className="btn rounded-[10px] bg-transparent text-white w-[100%] lg:w-[47%] font-weight-400
                         text-[16px] lg:text-[12px] border-[1px] border-[#ffff] hover:text-[#25133A] hover:bg-[#ffff]">
                            <img src="assets/devicon_apple.png" className='lg:w-[15px]' alt="" />
                            Sign up with Apple
                        </button>
                    </div>
                    <div className="divider text-[14px] text-[#FFFFFF80] font-weight-400 my-10">OR</div>
                    <form action="" className='flex flex-col gap-3'>
                        <input type="text" placeholder="First name" className="input input-bordered border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400" />
                        <input type="text" placeholder="Last name" className="input input-bordered border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400" />
                        <input type="email" placeholder="Email address" className="input input-bordered border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400 " />
                        <PhoneInput country={'us'} inputProps={{required:true}}  className="border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400 " />
                        <label className="input input-bordered flex items-center gap-2 border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400 ">
                            <input type="password" className="grow" value="password" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            
                        </label>
                        <button className="btn btn-block bg-transparent border-[1px] border-[#FCB349] text-[#FCB349] text-[20px] font-weight-700 hover:text-[#FCB349] hover:border-[#25133A] hover:bg-[#ffff]">Sign Up</button>
                        <span className='text-[20px] text-white font-weight-700 text-center'>Already have an account? <a className='text-[#FCB349] hover:text-white'>Log in</a></span>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex right_wrapper h-[100vh] w-[50%] py-[50px] px-[5%]  align-center justify-center">
                <div className=""> 
                    <img src="assets/SigupHeroImg.png" className='w-[450px] h-[400px] mx-auto' alt="" />
                    <p className="text-[24px] font-weight-400 text-[#000000] text-center mt-6">Explore a wide range of gadgets and find the perfect tech for your lifestyle.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp