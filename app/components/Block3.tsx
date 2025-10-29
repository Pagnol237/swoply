import React from 'react'
import Style from "../app.module.scss";
import data from '@/data';
import Image from 'next/image';
import Link from 'next/link';

function Block3() {
  return (
    <div className={Style.block3_main}>
        <h2 className={Style.title}>Notre vision en 3 étapes simples</h2>
        <div className={Style.block3_wraper}>
            {
                data.map((item,index)=>(
                    <div className={Style.box} key={index}>
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
                    </div>
                ))
            }
        </div>

        <div className={Style.sondageText}>
            Réponds à un court sondage (moins de 2 minutes) et tente de gagner une carte cadeau de 100 $
        </div>
        <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScVNlWl3L_XTcjxLfG_qUxMJkTwtwKnO0D9z_2tox3giaxQ4Q/viewform?usp=header"
            target='_blank'
            rel="noopener noreferrer"
            className={Style.Btn}
        >
            Je participe
        </Link>
        
    </div>
  )
}

export default Block3