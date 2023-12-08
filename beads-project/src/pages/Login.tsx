'use client';


import Image from 'next/image';
import './login.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next';


export const metadata: Metadata = {
     title: "Login Page",
     description: "Login Page Auth",
     icons: "/logo.png",
}

const LoginPage = () => {
     
     const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");
     const [open, setOpen] = useState(false);
     const [err, setErr] = useState("");
     const router = useRouter();

     const handleLogin = async() => {
          if(!email && !pass){
               setErr('Please fill the content!');
          } else {
               try {
                    await fetch('http://localhost:3006/login', {
                         method: "POST",
                         headers: {"Content-Type" : "application/json"},
                         body: JSON.stringify({
                              email: email,
                              password: pass,
                         })
                    })
                    swal({
                         icon: "success",
                         title: "Login Success!"
                    })


                    router.push('/MainMenu')
               } catch (error) {
                    console.info(error)
               }
          }
     }


     return (
          <>

               <Head>
                    <title>Login Page</title>
                    <link rel="icon" type="image/png" href="/logo.png"></link>
                    <meta charSet="UTF-8"></meta>
                    <meta name="description" content="Beads Me" />
                    <meta name="keywords" content="Beads Product" />
                    <meta name="author" content="Beads Me" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
               </Head>
               <main className="main-login" id="Login">
               <Image className="img-login" src="/hero.png" alt="Login-Page" width={500} height={500} />
               <section className="card-login">
                    <h1 className="header-login">Login<br />Your Account</h1>
                    <div className="form-input">
                         <form>
                              <label className="label-email">Email</label>
                              <br />
                              <input type='email' className="input-email" value={email} onChange={(e) => {
                                   setEmail(e.target.value);
                                   setErr('');
                              }} placeholder='Johndoe@gmail.com'></input>
                              <p className="error-email">{err}</p>
                              <br />
                              <label className="label-password">Password</label>
                              <br />
                              <input type="password" className="input-password" value={pass} onChange={(e) => {
                                   setPass(e.target.value);
                                   setErr('');
                              }} placeholder='*******'></input>
                              <p className="error-pass">{err}</p>
                              
                              <section className="btn-login">
                                   <button type="button" className="btn-submit" onClick={handleLogin}>Login</button>
                              </section>
                         </form>
                    </div>
                    <p className="can-account">dont have an account ? <Link href="/Register"><span className="span-account">Register</span></Link></p>
               </section>
          </main>
          
          </>
     );
}

export default LoginPage;