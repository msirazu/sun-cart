'use client';

import LoadingInfinity from "@/components/ui/loader/LoadingInfinity";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const Account = () => {
    const {data: session, isPending} = authClient.useSession();

    if (isPending) {
        return <LoadingInfinity/>
    }

    const user = session?.user;

    const handleSignOut = async() => {
        await authClient.signOut();
        toast.error('Log Out Success');
    }
    
    return (
        <>
        {user ? <div className="flex items-center gap-2">{`${user.name}`}<button onClick={handleSignOut} className="btn">Sign Out</button></div> : <div>
            <Link href={'/login'} className="btn">Sign In</Link>
        </div>}
        </>
    );
};

export default Account;