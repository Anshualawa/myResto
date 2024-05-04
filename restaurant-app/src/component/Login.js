import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NavBarManu from './NavBarManu';
const Login = () => {
    document.title='Login | Alawa';
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const login = () => {
        fetch(`${process.env.REACT_APP_API_URL}/login?name=${user}&password=${password}`)
            .then((response) => response.json())
            .then((result) => {
                // console.log('Response', result);
                if (result.length > 0) {
                    localStorage.setItem('login', JSON.stringify(result));
                    // alert('Login Success');
                    navigate('/list');
                } else {
                    console.warn("Please check user name and password");
                    alert("Please check user name and password")
                }
            })
            .catch((error) => { console.log(error); });
    }

    return (
        <>
            <NavBarManu />
            <div className='w-2/5 lg:w-1/5 m-auto text-left mt-10 border shadow-xl rounded-xl bg-white'>
                <h1 className='text-xl font-bold py-3 lg:py-4 text-center bg-gray-200 rounded-t-xl'>
                    <FontAwesomeIcon icon={faLaptopCode} /> Admin Login
                </h1>
                <div className='px-5 text-left border rounded-b-xl'>
                    <div className='grid mb-5 mt-4'>
                        <label htmlFor='userid'>User ID</label>
                        <input type='text' name='userid' onChange={(event) => setUser(event.target.value)} className="w-full px-3 py-1 rounded border" />
                    </div>
                    <div className='grid'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' onChange={(event) => setPassword(event.target.value)} className="w-full px-3 py-1 rounded border" />
                    </div>
                    <div className='grid'>
                        <button onClick={login} className="w-full px-3 py-2 my-5 rounded bg-blue-500 text-white font-bold">
                            <FontAwesomeIcon icon={faUnlock} /> Login
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;
