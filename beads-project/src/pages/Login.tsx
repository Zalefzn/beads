'use client';

import Image from 'next/image';
import './login.scss';


const LoginPage = () => {
     return (
          <main className="main-login" id="Login">
               <Image className="img-login" src="/hero.png" alt="Login-Page" width={500} height={500} />
               <section className="card-login">
                    <h1 className="header-login">Login<br />Your Account</h1>
               </section>
          </main>
     );
}

export default LoginPage;