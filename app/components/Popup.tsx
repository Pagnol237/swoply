'use client'
import React from 'react'
import Style from "../app.module.scss";
import Image from 'next/image';
import Picture from '../../public/images/popup.png';
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";
import { useState,useEffect } from 'react';
import { motion,easeIn,easeInOut} from "framer-motion";

function Popup() {
    const [show,setShow] = useState(false);

    useEffect(()=>{
        const showBox = setTimeout(()=>{
            setShow(true);
        },5000)
        return()=>clearTimeout(showBox);
    },[])
  return (
    <motion.div className={Style.pop_up_main} style={{visibility:show?'visible':'hidden'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div  className={Style.pop_up_container}>
            <div className={Style.close_btn} onClick={()=>{setShow(false);}}>
                <RxCross2  size={24}/>
            </div>
            <Image
            src={Picture}
            alt='pop up swoply image'
            width={2000}
            height={1051}
            className={Style.pop_up_image}
            />
            <div className={Style.pop_up_Text_container}>
                <p className={Style.pop_up_Text}>
                    Réponds à un court sondage (moins de 2 minutes)<br/>
                    <span style={{fontWeight:300,fontSize:17}}>et tente de gagner une carte cadeau de 100 $</span> 
                </p>
                    <Link 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScVNlWl3L_XTcjxLfG_qUxMJkTwtwKnO0D9z_2tox3giaxQ4Q/viewform?usp=header"
                        target='_blank'
                        rel="noopener noreferrer"
                        className={Style.pop_up_Btn}
                        onClick={()=>{setShow(false);}}
                    >
                        Je participe
                    </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Popup