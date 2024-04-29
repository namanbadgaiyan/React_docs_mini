import React from 'react'

function background() {
    return (
        <>  
            <div className='w-full h-screen absolute z-[2]'>                
                <div className='flex justify-center py-4 absolute top-[5%] text-zinc-300 w-full text-[3vh]'>document</div>
                <h1 className='text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-500 tracking-tighter leading-tight'>Docs.</h1>
            </div>
        </>
    )
}

export default background