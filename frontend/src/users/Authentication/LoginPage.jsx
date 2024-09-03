import React from 'react'

function LoginPage() {
  return (
    <div className='bg-yellow-400 w-full min-h-screen flex flex-col justify-center items-center'
    style={{background: 'lineargradient(180deg, rgba(250,204,21,1) 0%, rgba(250,222,111,1) 100%)'}}
    >
      <h1 style={{fontSize:'17vh'}} className='font-extrabold text-white'>Sp@ce</h1>
      <div className='bg-white w-2/6 rounded-xl shadow-md p-6'>
      {/* <h2 className='text-center font-extrabold text-5xl text-amber-500'>Space</h2> */}
      <form
              // onSubmit={handleSubmit}
              className="flex flex-col text-xs sm:text-sm px-1 my-7 text-amber-800 mt-10"
            >
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                // onChange={handleInputChange}
                // value={data.email}
                className="bg-transparent border border-amber-500 rounded-md py-2 px-4 text-gray-400 my-1"
              />
              <label htmlFor="" className="mt-6">
                Password
              </label>
              {/* <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
              value={data.password}
              className="bg-transparent border border-amber-500 rounded-md py-1 px-4 text-gray-400 my-1"
            /> */}
              <div className="flex bg-transparent border justify-between items-center border-amber-500 rounded-md py-2 px-1  text-gray-400 my-1">
                <input
                  className="bg-transparent w-5/6 px-3 outline-none"
                  // type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  // onChange={handleInputChange}
                  // value={data.password}
                />
                {/* <FaEye
                  className="w-4 h-4 text-amber-500 ml-2"
                  onClick={passwordVisibleToggle}
                /> */}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  className="bg-amber-500 text-white font-bold w-2/6 p-2 rounded-3xl"
                  type="submit"
                  // disabled={loading}
                >
                  SIGN IN
                </button>
              </div>
            </form>
      </div>

    </div>
  )
}

export default LoginPage
