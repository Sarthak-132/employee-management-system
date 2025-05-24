import React from "react";

const Login = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-rose-500">
                <form className="flex flex-col items-center justify-center p-20">
                    <input
                        className="border-2 border-rose-500 text-xl text-black outline-none bg-transparent placeholder:text-white py-2 px-6 mt-5 rounded-xl"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        className="border-2 border-rose-500 text-xl text-black outline-none bg-transparent placeholder:text-white py-2 px-6 mt-5 rounded-xl"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button
                        className="border-none  text-xl text-white bg-rose-600  py-2 px-6 mt-5 rounded-xl"
                        type="password"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
