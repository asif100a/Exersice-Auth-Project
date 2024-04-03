import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import logo from '../../src/assets/images.png';

const Navber = () => {
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/signIn'}>Sign In</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    const {signOutAccount, user, setUser} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutAccount()
            .then(res => {
                console.log(res);
                setUser(null)
                console.log('account signed out successfully');
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <p className="mr-6">{user.email}</p>
                }
                <button onClick={handleSignOut} className="btn">Sign out</button>
                {/* <img src={user.photoURL} alt="" /> */}
                {
                    user && <img className="w-12 h-12 rounded-full ml-6" src={user.photoURL || logo} alt="" />
                }
            </div>
        </div>
    );
};

export default Navber;