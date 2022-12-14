import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function NavBar(){
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
  
    /* useEffect(()=> {
      if(isOpen == true){
        var elem = document.getElementById(`showMenu`);
        if(typeof elem !== 'undefined' && elem !== null) {
          window.addEventListener('click', function(e){   
            if (!(elem!.contains(e.target))){
                setIsOpen(false)
            } 
          });
        }
      }
  },[isOpen]) */


    return (
        <header>
            <div className="headerContainer absoluteBox">
                <div className="header">
                <div className="logo absoluteBox">           
                        <Link href={'/'}> 
                            
                            <span>
                                <Image src="/logo_bde_estiam_lyon.png" alt="Vercel Logo" width={60} height={60} />
                            </span>
                        </Link>

                        </div>

                        <nav className="navBar">
                            <ul className="navList">
                                <Link href="/"><li className={router.asPath == "/" ? "navigateActive" : "navigateElement"}>{"Accueil"}</li></Link>
                                <Link href="/events"><li className={router.asPath == "/events" ? "navigateActive" : "navigateElement"}>{"Evénements"}</li></Link>
                                <Link href="/about-bde"><li className={router.asPath == "/about-bde" ? "navigateActive" : "navigateElement"}>{"Qu'est ce que le BDE ?"}</li></Link>
                                <Link href="/contact-us"><li className={router.asPath == "/contact-us" ? "navigateActive" : "navigateElement"}>{"Nous Contacter"}</li></Link>
                            </ul>

                            <div className="primary searchButton">
                                <span className="material-icons">
                                    search
                                </span>
                            </div>
                        </nav>

                        

                        <div className="primary MenuForPhone" onClick={()=>{setIsOpen(!isOpen)}}>
                                <span className="material-icons">
                                {`${isOpen == true ? "close" : "menu"}`}
                                </span>
                            </div>

                </div>

                
                <div
                className={`${isOpen == true ? "showMenu" : "hideMenu"}`}
                id='showMenu'
                >
                    
                <ul className="navList">
                                <Link href="/"><li className={router.asPath == "/" ? "navigateActive" : "navigateElement"}>{"Accueil"}</li></Link>
                                <Link href="/events"><li className={router.asPath == "/events" ? "navigateActive" : "navigateElement"}>{"Evénements"}</li></Link>
                                <Link href="/about-bde"><li className={router.asPath == "/about-bde" ? "navigateActive" : "navigateElement"}>{"Qu'est ce que le BDE ?"}</li></Link>
                                <Link href="/contact-us"><li className={router.asPath == "/contact-us" ? "navigateActive" : "navigateElement"}>{"Nous Contacter"}</li></Link>
                            </ul>

                </div>
            </div>
        </header>
    
    )
}
