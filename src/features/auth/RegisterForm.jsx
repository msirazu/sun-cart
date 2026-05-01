'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const callbackURL = searchParams.get('callbackURL') || '/';

    const handleRegister = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            const msg = "Password must be at least 8 characters long and contain both letters and numbers.";
            setErrorMessage(msg);
            return;
        }

        const userData = { name, email, password}

        const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        callbackURL: callbackURL,
        });

        if (data) {
            toast.success('Registration Success');
            e.target.reset();
            router.push(callbackURL);
        }

        if (error) {
            setErrorMessage(error.message || "Registration failed. Please try again.");
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

{errorMessage && (<div className="bg-red-50 p-2 rounded mt-2"><p className="text-red-600 text-xs font-medium italic"> ⚠️ {errorMessage}
</p></div>)}

          <div>Already have Account, then <Link href={`/login?callbackURL=${encodeURIComponent(callbackURL)}`} className="link link-hover font-bold">Login</Link></div>
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