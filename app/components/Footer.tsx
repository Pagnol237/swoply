import React from 'react'
import Style from "../app.module.scss";
function Footer() {
  return (
    <div className={Style.footerMain}>
        <p>© 2025 Swoply — Tous droits réservés<br/>
            <span style={{fontWeight:300,fontSize:15}}>Développé par Nounjo franck</span>
        </p>
    </div>
  )
}

export default Footer