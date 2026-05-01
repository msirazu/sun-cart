'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const searchParams = useSearchParams();

    const callbackURL = searchParams.get("callbackURL") || "/";

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData = { email, password }

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: callbackURL,
        });

        if (data) {
            toast.success('Login Successful');
            e.target.reset();
        }

        if (error) {
            setErrorMessage(error.message || 'Invalid email or password');
            toast.error(error.message || 'Login failed')
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="hero min-h-screen">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
<label className="label">Email</label>
<input type="email" className="input w-full" placeholder="Email" name="email" required/>
<label className="label">Password</label>
<input type="password" className="input w-full" placeholder="Password" name="password" required/>
{errorMessage && (<p className="text-red-500 text-sm mt-2 font-medium">⚠️ {errorMessage}</p>)}
<div className="my-3">Don&apos;t have an Account, then <Link href={`/register?callbackURL=${encodeURIComponent(callbackURL)}`} className="link link-hover font-bold">Register</Link></div>
<button type="submit" className="btn btn-neutral">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;