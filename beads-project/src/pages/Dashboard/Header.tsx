'use client'

import './header.scss';
import swal from 'sweetalert';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const HeaderDash = () => {

     const router = useRouter();
     
     const handleSignout = async() => {
          router.push('/Login');
     }

     return(
          <header className="header-dashboard">
               <nav className="nav-dashboard">
                    <li className="logo-beads">
                         <Image src="/logo.png" height={70} width={100} alt="beads"></Image>
                    </li>
                    <li className="input-search">
                         <input type='text' placeholder='Search Product Here...' className="input-product"></input>
                    </li>
                    <li className="signout"><button type="submit" onClick={handleSignout}>Sign out</button></li>
               </nav>
          </header>
     );
}

export default HeaderDash;