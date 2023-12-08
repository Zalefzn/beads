'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './register.scss';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';



const Register = () => {
      const router = useRouter();
      const [email, setEmail] = useState("");
      const [pass, setPass] = useState("");
      const [name, setName] = useState("");
      const [err, setErr] = useState("");
      const [confPass, setConfPass] = useState("");
          
      const handleRegister = async() => {
               if(!email && !pass && !confPass){
                    setErr("Please fill the content!");
                    swal({
                         icon: "warning",
                         title: "Please fill the content!",
                    });
                    setErr("");
               } else {
                    try {
                         await fetch("http://localhost:3006/users", {
                              method: "POST",
                              headers: {'Content-Type':'application/json'},
                              body: JSON.stringify({
                                   name: name,
                                   email: email,
                                   password : pass,
                                   confPassword : confPass,
                              })
                         });
                         swal({
                              icon: "success",
                              title: "Register Success!"
                          });
                          router.push('/Login');
                    } catch (error) {
                       console.info(error);
                 }
               }
      }        



      return(
          <>
               <Head>
                    <title>Register Page</title>
                    <link rel="icon" type="image/png" href="/logo.png"></link>
                    <meta charSet="UTF-8"></meta>
                    <meta name="description" content="Beads Me" />
                    <meta name="keywords" content="Beads Product" />
                    <meta name="author" content="Beads Me" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
               </Head>

               <main className="register-page" id="Register">
                <Image src="/hero.png" alt="hero-register" width={500} height={500} className="img-regis" />
               <section className="card-register">
                    <h1 className="header-register">
                        Register<br/>Your Account
                    </h1>
                    <div className="form-input">
                         <form>
                         <label className="label-username">Username</label>
                              <br />
                              <input type='text' className="input-username" value={name} onChange={(e) => {
                                   setName(e.target.value);
                                   setErr("");
                              }} placeholder='Johndoe16'></input>
                              {/* <p className="username-err">{err}</p> */}
                              <br />
                              <br />
                              <label className="label-email">Email</label>
                              <br />
                              <input type='email' className="input-email" value={email} onChange={(e) => {
                                   setEmail(e.target.value);
                                   setErr("");
                              }} placeholder='Johndoe@gmail.com'></input>
                              {/* <p className="email-err">{err}</p> */}
                              <br />
                              <br />
                              <label className="label-password">Password</label>
                              <br />
                              <input type="password" className="input-password" value={pass} onChange={(e) => {
                                   setPass(e.target.value);
                                   setErr("");
                              }} placeholder='*******'></input>
                              {/* <p className="pass-err">{err}</p> */}
                              <br />
                              <br />
                              <label className="label-confPass">Confirm Password</label>
                              <br />
                              <input type="password" className="input-confPass" value={confPass} onChange={(e) => {
                                   setConfPass(e.target.value);
                                   setErr("");
                              }} placeholder='*******'></input>
                              {/* <p className="confPass-err">{err}</p> */}
                              <br />
                              <section className="btn-regis">
                                   <button type="button" className="btn-submitRegis" onClick={handleRegister}>Register</button>
                              </section>
                         </form>
                    </div>
                    <p className="can-account-regis">have an account ? <Link href="/Login"><span className="span-account-regis">Login</span></Link></p>
               </section>
          </main>
          </>
          
      );
}

export default Register;