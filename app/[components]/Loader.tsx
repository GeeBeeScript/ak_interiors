import { LoaderCircle } from 'lucide-react'
import * as motion from "motion/react-client"


const Loader = () => {
  return (
    <div className="w-[90vw] h-[80vh] flex justify-center items-center text-[#400] font-bold font-cabin">
        <p className='flex justify-center items-center space-x-2'><span>Loading</span> <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, ease: "easeIn", repeat: Infinity }}><LoaderCircle /></motion.span></p>
    </div>
  )
}

export default Loader