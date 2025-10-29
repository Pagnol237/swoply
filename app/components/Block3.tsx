'use client'
import React from 'react'
import Style from "../app.module.scss";
import data from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion,easeIn,easeInOut,spring} from "framer-motion";

function Block3() {

              const variants = {
            view:(index:any)=>({
              opacity:1,
              y:0,
              transition:{
                delay:index*0.2,
                easeIn:easeIn,
                duration:0.7
              }
            }),
            hidden:{
              opacity:0,
              y:50,
            }
          
          }
  return (
    <div className={Style.block3_main}>
        <motion.h2 className={Style.title} initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
            Notre vision en 3 étapes simples
        </motion.h2>
        <div className={Style.block3_wraper}>
            {
                data.map((item,index)=>(
                    <motion.div className={Style.box} key={index} custom={index} variants={variants} initial="hidden" whileInView="view">
                        <div className={Style.idContainer}>{item.id}</div>
                        <Image
                            src={item.image}
                            alt='swoply spet icon explain'
                            width={512}
                            height={512}
                            style={{width:"20%",height:"auto"}}
                        />
                        <h4 className={Style.step_title}>{item.title}</h4>
                        <p className={Style.step_text}>{item.text}</p>
                    </motion.div>
                ))
            }
        </div>

        <motion.div className={Style.sondageText} initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
            Réponds à un court sondage (moins de 2 minutes) et tente de gagner une carte cadeau de 100 $
        </motion.div>

        
        <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScVNlWl3L_XTcjxLfG_qUxMJkTwtwKnO0D9z_2tox3giaxQ4Q/viewform?usp=header"
            target='_blank'
            rel="noopener noreferrer"
            className={Style.Btn}
        ><motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
            Je participe
            </motion.div>
        </Link>
        
        
    </div>
  )
}

export default Block3