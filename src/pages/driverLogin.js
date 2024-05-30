    import React  from 'react';
    import busimg from "../assests/busimage.jpg"
    import LoginSideBar from '../components/LoginSideBar';

    const DriverLogin = () => {
    return (
        <div className='bg-secondaryBackground h-screen flex justify-center items-center'>
            <div className='w-[80%] h-[80%] bg-primaryBackground border-stone-600 border-1 shadow-sm flex justify-between'>
                <div className="w-1/2 flex justify-center items-center mb-12">
                    <img src={busimg} />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center mb-12">
                    <LoginSideBar />
                </div>
            </div>
        </div>
    );
    };

    export default DriverLogin;
