"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    // const router = useRouter();

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (isLogin) {
        //     router.push('/dashboard'); 
        // } else {
        //     router.push('/welcome'); 
        // }
    };

    return (
        <div className="auth-wrap">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    {isLogin ? (
                        <>
                            <input type="text" placeholder="Username" name="un" />
                            <input type="password" placeholder="Password" name="pw" />
                        </>
                    ) : (
                        <>
                            <input type="text" placeholder="Username" name="un" />
                            <input type="password" placeholder="Password" name="pw" />
                            <input type="email" placeholder="Email" name="email" />
                        </>
                    )}
                    <button type="submit">{isLogin ? 'Sign in' : 'Register'}</button>
                    <a href="#" onClick={handleToggle}>
                        <p>{isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}</p>
                    </a>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
