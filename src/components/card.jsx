import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({DATA , referance}) {
    return (           
        <motion.div drag dragConstraints={referance} whileDrag={{scale: 1.1, transition: { duration: 1 }}} dragElastic={0.2} className='w-[13.5vw] h-[38vh] rounded-[2vw] bg-zinc-300 px-8 py-8 relative overflow-hidden flex-shrink-0'>
            <FaFileAlt className='text-[3vh]' />
            <p className='mt-7 text-[1.7vh] leading-5 tracking-wide font-bold'>{DATA.desc}</p>
            <div className='footer w-full absolute bottom-0 left-0'>
                <div className='px-10 py-5 mb-4 flex justify-between items-center'>
                    <h1 className='text-[2vh] text-white mix-blend-difference font-bold'>{DATA.filesize}</h1>
                    {DATA.close ? <IoClose size={"3vh"} /> : <LuDownload size={"3vh"} />}
                </div>
                {DATA.tag.isOpen && 
                <div className= {`w-full py-6 font-bold ${DATA.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                    <h3 className='text-[1vw] text-white'>{DATA.tag.tagTittle}</h3>
                </div>
                }

            </div>
        </motion.div>
    )
}

export default Card