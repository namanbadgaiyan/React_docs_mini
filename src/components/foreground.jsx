import React, { useRef } from 'react'
import Card from './card'

const foreground = () => {

    const ref = useRef(null);

    const DATA = [ 
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum nesciunt ",
            filesize : '0.4 mb',
            close: true,
            tag : {isOpen: false, tagTittle: "Download Now", tagColor: 'green'},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum nesciunt officiis natus autem iusto.",
            filesize : '0.4 mb',
            close: false,
            tag : {isOpen: true, tagTittle: "Download Now", tagColor: 'blue'},
        },
        {
        desc: "Lorem ipsum dolor sit amet consecteturipsum nesciunt officiis natus autem iusto.",
        filesize : '0.4 mb',
        close: true,
        tag : {isOpen: true, tagTittle: "upload", tagColor: 'green'},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum nesciunt officiis natus autem iusto.",
            filesize : '0.4 mb',
            close: true,
            tag : {isOpen: true, tagTittle: "open", tagColor: 'green'},
            },
        
]

    return (
        <div ref={ref} className='w-full h-screen fixed z-[3] flex gap-8 flex-wrap p-6'>
            {DATA.map((item,index) =>(
                <Card DATA = {item} referance = {ref} />
            ) )}
        </div>
    )
}

export default foreground