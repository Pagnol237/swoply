'use client'
import React from 'react'
import Style from "../app.module.scss";
import Image from 'next/image';
import Phone1 from "../../public/images/phone1.png"
import Phone2 from "../../public/images/phone2.png"
import Logo from "../../public/images/logo.png"
import { useState } from 'react';
import { supabaseClient } from "../../utils/supabase/client";
import { motion,easeIn,easeInOut} from "framer-motion";



function block1() {
    const MotionImage = motion(Image);

  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const validateEmail = (value: string) => {
    if (!value) return "L'email est obligatoire.";
    if (!/\S+@\S+\.\S+/.test(value)) return "Email invalide.";
    return "";
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMsg = validateEmail(email);
    if (errorMsg) {
      setMsg(errorMsg);
      return;
    }

   const { data, error } = await supabaseClient
                        .from("prospect_email")
                        .insert([{email}]);


    if (error) {
      setMsg("Erreur : " + error.message);
    } else {
      setMsg("Merci ! Votre email a été enregistré ");
      setEmail("");
    }
  };
  return (

    <div className={Style.block1_main}>
        <motion.div className={Style.logoContainer} initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
            <Image
            src={Logo}
            width={537}
            height={239}
            alt='logo swoply'
            className={Style.logo}
            />
        </motion.div>
        <div className={Style.wrapper}>  
            <div className={Style.left_part}>
                <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
                    <p className={Style.text1}>
                        <span className={Style.spanName1}>Avec Swoply</span>, transforme tes objets inutilisés en opportunités.
                        Échange, donne, et accumule des points de récompense à chaque action.

                    </p>
                </motion.div>

                <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
                    <p className={Style.text2}>
                    Inscris-toi pour être informé du lancement officiel et recevoir une surprise exclusive !
                    </p>
                </motion.div>
                <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.7}}>
                    <div >
                        <form className={Style.formContainer} onSubmit={handelSubmit}>
                            <input 
                                type='email' 
                                placeholder='exemple@gmail.com' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className={Style.input1}
                            />
                            <input type='submit' value="s'inscrire" className={Style.suscribeBtn} />
                        </form>
                        {/*affichage du message de succe ou d'erreur*/}
                    </div>
                    <p style={{fontSize:13 }}>{msg}</p>
                </motion.div>
            </div>
            <div className={Style.rigth_part}>
                    <MotionImage
                    src={Phone2}
                        alt='wsoply screen image'
                        width={521}
                        height={1075}
                        className={Style.image1}
                        initial={{opacity:1,x:-50,zIndex: 10}} whileInView={{opacity:1,x:0,zIndex: 10}} transition={{ease:easeInOut,duration:0.7}}
                    />

                    <MotionImage
                    src={Phone1}
                    alt='wsoply screen image'
                    width={521}
                    height={1075}
                    className={Style.image2}
                    initial={{opacity:0,x:50,zIndex: 9}} whileInView={{opacity:1,x:0,zIndex: 9}} transition={{ease:easeIn,duration:0.7}}
                    />


            </div>
        </div>  
    </div>
  )
}

export default block1