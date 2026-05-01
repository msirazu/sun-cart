'use client';

import LoadingInfinity from "@/components/ui/loader/LoadingInfinity";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import manAvatar from '@/assets/icons/man-avatar.jpg';
import Link from "next/link";

const MyProfilePageMain = () => {
    const {data: session, isPending} = authClient.useSession();

    if (isPending) {
        return <LoadingInfinity/>
    }

    const user = session?.user;
  
    return (
        <div className="grid grid-cols-12 gap-5 py-5">
                    <section className="col-span-12 md:col-span-5 lg:col-span-4 border border-gray-200 p-5">
                    <div className="flex justify-center items-center">
                    {user.image ? <Image className="rounded-full" width={250} height={250} alt={user.name} src={user.image} unoptimized loading="eager"/> : <Image className="rounded-full" width={250} height={250} alt={'profile pic'} src={manAvatar} unoptimized loading="eager"/>}
                    </div>
                    </section>

                    <section className="col-span-12 md:col-span-7 lg:col-span-8 border border-gray-200 p-5 space-y-5">
                    <h2 className="font-bold text-xl">
                    Name: <span>{user.name}</span>
                    </h2>
                    <h3>Email: <span>{user.email}</span></h3>
                    <p className="text-sm">If you want to update profile click below</p>
                    <div>
                        <Link className="btn" href={'/dashboard/update-profile'}>Update Profile</Link>
                    </div>
                    </section>
                </div>
    );
};

export default MyProfilePageMain;