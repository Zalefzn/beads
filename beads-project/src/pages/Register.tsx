'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import './register.scss';



const Register = () => {
      const router = useRouter();
      const [email, setEmail] = useState("");
      const [pass, setPass] = useState("");
      const [username, setUsername] = useState("");
      const [confPass, setConfPass] = useState("");

      const handleRegister = () => {

      }

      return(
          <main className="register-page" id="Register">
               Register Page
          </main>
      );
}

export default Register;