'use client';

import LoadingInfinity from "@/components/ui/loader/LoadingInfinity";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Account = () => {
    const {data: session, isPending} = authClient.useSession();
    if (isPending) {
        return <LoadingInfinity/>
    }
    const user = session?.user;
    return (
        <>
        {user ? <div className="flex items-center gap-2">{`${user.name}`}<button onClick={async() => await authClient.signOut()} className="btn">Sign Out</button></div> : <div>
            <Link href={'/login'} className="btn">Sign In</Link>
        </div>}
        </>
    );
};

export default Account;