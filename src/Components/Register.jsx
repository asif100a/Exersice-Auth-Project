import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
    const {registerWithEmailAndPassword} = useContext(AuthContext);

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess('');
        setError('');

        if(password.length < 8) {
            setError('You should provide at least 8 characters of password.');
            return;
        }
        else if(!/[A-Z]/.test(password)) {
            setError('You should provide at least 1 character of Uppercase.');
            return;
        }
        else if(!/[a-z]/.test(password)) {
            setError("You should provide at least 1 character of Lowercase.");
            return;
        }
        else if(!/[!@#$%^&*]/.test(password)) {
            setError("You should provide at least 1 character of special sign(!@#$%^&*).");
            return;
        }
       
        registerWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res.user);
                setSuccess('You have registered successfully.');
            })
            .catch(err => {
                console.error(err.message);
                if(err.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("You have already registered.");
                }
            })
    };
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register your account</h1>
                <form onSubmit={handleRegister} action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border" required />
                    </div>
                    
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    {
                        error && <p className="text-red-500">{error}</p>
                    }

                    <div className="flex justify-center items-center">
                        <button href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Register now</span>
                        </button>
                    </div>
                </form>

                <p className="text-base text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to={'/signIn'} rel="noopener noreferrer" href="#" className="hover:underline dark:text-gray-800 text-blue-600 ml-2">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;