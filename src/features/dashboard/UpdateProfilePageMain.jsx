'use client';

import { useEffect, useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import LoadingInfinity from '@/components/ui/loader/LoadingInfinity';

const UpdateProfilePageMain = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    
useEffect(() => {
    const updateState = async() => {
        if (session?.user) {
            setName(session.user.name || "");
            setImage(session.user.image || "");
            }
        }
        updateState();
    }, [session])

    if (isPending) {
        return <LoadingInfinity/>
    }
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        
        await authClient.updateUser({
        name: name,
        image: image,
    });

    toast.success("Profile Updated Successfully");
    router.push('/dashboard/my-profile');
    router.refresh();
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form 
                onSubmit={handleUpdate}
                className="animate__animated animate__fadeInUp bg-base-100 p-10 shadow-xl rounded-2xl w-full max-w-md border border-base-300"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
                
                <div className="form-control w-full mb-4">
                    <label className="label font-medium text-sm">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="input input-bordered w-full" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-sm">Photo URL</label>
                    <input 
                        type="text" 
                        placeholder="Paste image link" 
                        className="input input-bordered w-full" 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full text-white">
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfilePageMain;