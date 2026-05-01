'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const LoginForm = () => {

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData = { email, password }

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: '/',
        });

        if (data) {
            console.log('login success');
            e.target.email.value = '';
            e.target.password.value = '';
        }

        if (error) {
            console.log('error', error.message);
        }
        console.log(data);
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
                                <div>Don&apos;t have an Account, then <Link href={'/register'} className="link link-hover font-bold">Register</Link></div>
                                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;