'use client';

import { useGlobalContext } from '@/api/Context/auth';
import Image from 'next/image';
import './login.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const LoginPage = () => {


     const {userId, setUserId, data, setData} = useGlobalContext();

     const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");
     const [open, setOpen] = useState(false);
     const router = useRouter();


     useEffect(()=> {

          setUserId('2')
          setData([
               {firstName: 'Rizal'},
               {firstName: 'Fauzan'},
               {firstName: 'Bisma'},

          ])
     })

     const handleLogin = () => {
          if(!email && !pass){
               swal({
                    icon: "warning",
                    title: "Please Fill TextField!",
                    text: "Wrong Email & Password!"
               });
          } else {
               swal({
                    icon: "success",
                    title: "Login Success!"
               })
               router.push('/MainMenu');
          }
     }


     return (
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
                              }} placeholder='Johndoe@gmail.com'></input>
                              <br />
                              <br />
                              <label className="label-password">Password</label>
                              <br />
                              <input type="password" className="input-password" value={pass} onChange={(e) => {
                                   setPass(e.target.value);
                              }} placeholder='*******'></input>
                              <br />
                              <section className="btn-login">
                                   <button type="button" className="btn-submit" onClick={handleLogin}>Login</button>
                              </section>
                         </form>
                    </div>
                    <p className="can-account">dont have an account ? <Link href="/Register"><span className="span-account">Register</span></Link></p>
               </section>
          </main>
     );
}

export default LoginPage;