import Image from 'next/image'
import Preferences from './component/Preferences'


export default  function  Home() {
  return (
      <>
      <di className="w-full flex flex-col justify-center items-center">
      <h1 className='text-2xl mt-14 mb-14'>User Preferences</h1>
     
      <Preferences/>

    </di>
      </>
  )
}
