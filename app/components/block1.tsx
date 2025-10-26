import React from 'react'
import Style from "../app.module.scss";
import Image from 'next/image';
import Phone1 from "../../public/images/phone1.png"
import Phone2 from "../../public/images/phone2.png"
import Logo from "../../public/images/logo.png"


function block1() {
  return (

    <div className={Style.block1_main}>
        <div className={Style.logoContainer}>
            <Image
            src={Logo}
            width={537}
            height={239}
            alt='logo swoply'
            style={{width:"auto",height:"70px",paddingTop:10}}
            />
        </div>
        <div className={Style.wrapper}>  
            <div className={Style.left_part}>
                <p className={Style.text1}>
                    <span className={Style.spanName1}>Avec Swoply</span>, transforme tes objets inutilisés en opportunités.
                    Échange, donne, et accumule des points de récompense à chaque action.

                </p>

                <p className={Style.text2}>
                Inscris-toi pour être informé du lancement officiel et recevoir une surprise exclusive !
                </p>

                <div >
                    <form className={Style.formContainer}>
                        <input type='text' placeholder='exemple@gmail.com' className={Style.input1}/>
                        <input type='submit' value="s'inscrire" className={Style.suscribeBtn} />
                    </form>
                </div>
            </div>
            <div className={Style.rigth_part}>
            
                <Image
                src={Phone2}
                    alt='wsoply screen image'
                    width={521}
                    height={1075}
                    className={Style.image1}
                />
                

            
                    <Image
                    src={Phone1}
                    alt='wsoply screen image'
                    width={521}
                    height={1075}
                    className={Style.image2}
                />
            

            </div>
        </div>  
    </div>
  )
}

export default block1