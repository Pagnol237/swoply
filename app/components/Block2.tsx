'use client'
import React from 'react'
import Style from "../app.module.scss";
import Phone3 from "../../public/images/phone3.png"
import Image from 'next/image';
import { motion,easeIn,easeInOut} from "framer-motion";

function Block2() {
  return (
    <div className={Style.block2_main}>
        <motion.div className={Style.subBlock2_A} initial={{opacity:0,x:-60}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.7}}>
            <Image
            src={Phone3}
            alt='swoply app screen'
            width={1000}
            height={1366}
            className={Style.image3}
            />
        </motion.div>

        <motion.div className={Style.subBlock2_B} initial={{opacity:0,x:60}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.7}}>

            <h2 className={Style.title}>Pourquoi ce projet ?</h2>
            <p className={Style.block2_text}>
                <span className={Style.block2_span_subtitle}>Donner une nouvelle vie aux objets, c’est bon pour la planète et pour toi.</span><br/><br/>

            Chaque année, des tonnes d’objets encore en parfait état sont jetées, faute d’avoir trouvé preneur.
            Chez Swoply, nous croyons qu’un objet inutilisé chez toi peut encore faire le bonheur de quelqu’un d’autre.
            Notre mission est simple : faciliter le don et l’échange d’objets, tout en récompensant les gestes solidaires.<br/><br/>

            Grâce à un système de points de gratitude, chaque échange ou don te rapproche de réductions exclusives chez nos partenaires locaux.
            </p>
        </motion.div>

    </div>
  )
}

export default Block2