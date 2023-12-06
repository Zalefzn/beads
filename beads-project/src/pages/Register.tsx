'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './register.scss';
import Link from 'next/link';



const Register = () => {
      const router = useRouter();
      const [email, setEmail] = useState("");
      const [pass, setPass] = useState("");
      const [username, setUsername] = useState("");
      const [confPass, setConfPass] = useState("");

      const handleRegister = () => {
            if(!email && !pass && !confPass) {
                swal({
                    icon: "warning",
                    title: "Please Fill Your Data First!"
                });
            } else {
                swal({
                    icon: "success",
                    title: "Register Success!"
                })
                router.push('/Login');
            }
      }

      return(
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
                              <input type='text' className="input-username" value={username} onChange={(e) => {
                                   setUsername(e.target.value);
                              }} placeholder='Johndoe16'></input>
                              <br />
                              <br />
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
                              <br />
                              <label className="label-confPass">Confirm Password</label>
                              <br />
                              <input type="password" className="input-confPass" value={confPass} onChange={(e) => {
                                   setConfPass(e.target.value);
                              }} placeholder='*******'></input>
                              <br />
                              <section className="btn-regis">
                                   <button type="button" className="btn-submitRegis" onClick={handleRegister}>Register</button>
                              </section>
                         </form>
                    </div>
                    <p className="can-account-regis">have an account ? <Link href="/Login"><span className="span-account-regis">Login</span></Link></p>
               </section>
          </main>
      );
}

export default Register;