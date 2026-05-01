'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const RegisterForm = () => {
    
    const handleRegister = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData = { name, email, password}

        const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        callbackURL: '/',
        });

        if (data) {
            console.log('register success');
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.password.value = '';
        }

        if (error) {
            console.log('error', error.message);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleRegister}>
            <div className="hero min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Name" name="name" required/>
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" name="email" required/>
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" name="password" required/>
          <div>Already have Account, then <Link href={'/login'} className="link link-hover font-bold">Login</Link></div>
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </fieldset>
    </div>
  </div>
</div>
            </form>
        </div>
    );
};

export default RegisterForm;