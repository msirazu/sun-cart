import Link from "next/link";

const MyProfilePage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Link className="btn" href={'/dashboard/update-profile'}>Update Profile</Link>
        </div>
    );
};

export default MyProfilePage;