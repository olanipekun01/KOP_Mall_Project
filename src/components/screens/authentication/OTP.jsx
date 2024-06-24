import React, {useState} from 'react'
import OtpInput from 'react-otp-input';

const OTP = () => {
  const [otp, setOtp] = useState('');

  return (
    <>
        <div className="flex flex-row ">
            <div className="w-[100%] left_wrapper lg:w-[50%] bg-[#25133A] px-7 lg:px-[7%] py-[50px] flex flex-col justify-center">
                <div className="">
                    <h1 className='text-[20px] font-weight-700 mb-[30px] text-[#FFFFFF] '>KOP Mall</h1>
                    <div className=" mb-[20px]">
                        <h3 className='text-[20px] font-weight-700 mb-[10px] text-[#FFFFFF]'>Forgot Password</h3>
                        <p className='text-[12px] font-weight-400 text-[#FFFFFF] lg:text-[16px] '>Enter your registered email address</p>
                    </div>
                  
                    <form action="" className='flex flex-col gap-3'>
                    {/* https://www.npmjs.com/package/react-otp-input?activeTab=readme */}
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                        <button className="btn btn-block bg-transparent border-[1px] border-[#FCB349] text-[#FCB349] text-[20px] font-weight-700 hover:text-[#FCB349] hover:border-[#25133A] hover:bg-[#ffff]">Reset password</button>
                        <span className='text-[20px] text-[#FCB349] font-weight-700 text-center'>Resend code in  <a className='text-[#FCB349] hover:text-white'>38s</a></span>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex right_wrapper h-[100vh] w-[50%] py-[50px] px-[5%]  flex-col justify-center">
                <div className=""> 
                    <img src="assets/SigupHeroImg.png" className='w-[450px] h-[400px] mx-auto' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default OTP