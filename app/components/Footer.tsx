import React from 'react'
import Style from "../app.module.scss";
import Link from 'next/link';
function Footer() {
  return (
    <div className={Style.footerMain}>
        <p>© 2025 Swoply — Tous droits réservés<br/>
            <span style={{fontWeight:300,fontSize:15}}>Développé et designer par <Link href="https://franckpagnol.vercel.app/" target='_blank'><u>Nounjo franck</u></Link> </span>
        </p>
    </div>
  )
}

export default Footer