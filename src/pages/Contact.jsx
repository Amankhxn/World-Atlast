import React from 'react'

const Contact = () => {

  const handleSubmit = (formData) => {
    const formDataentries = Object.fromEntries(formData.entries());
    console.log(formDataentries);
  }
  return (
    <div className=' h-[560px] flex justify-center items-center flex-col '>
      <h1 className='text-5xl text-center'>Contact</h1>
      <div className='h-[460px] flex  justify-center  w-[500px] p-6  '>


        <form action={handleSubmit} className='flex flex-col gap-6 '>
          <div className='flex justify-center items-center gap-4'>
            <input type="text" name="Name" placeholder='Enter Your Name...' required autoComplete='false' className='px-6 py-2 border w-[300px] sm:w-[367px] rounded-xl ' />
          </div>

          <div className='flex justify-center items-center gap-4'>
            <input type="text" name="email" placeholder='Enter Your email...' required autoComplete='false' className='px-6 py-2 border w-[300px] sm:w-[367px] rounded-xl ' />
          </div>

          <div className="textArea">
            <textarea name="message" rows={10} id="" className='border px-6 py-2 rounded-xl w-[300px] sm:w-[367px]' placeholder='Type Message.....'></textarea>
          </div>

          <button className='btn backdrop-blur-sm'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
