import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            password: null,
        }
    }

    login(key) {
        console.log(key);
    }
    render() {
        return (

            <div className='w-2/5 m-auto text-left mt-10 border shadow-xl rounded-xl bg-white'>
                <h1 className='text-xl font-bold py-3 text-center bg-gray-200 rounded-t-xl'> <FontAwesomeIcon icon={faLaptopCode} /> Login System</h1>
                <div className='px-5 text-left  border  rounded-b-xl'>
                    <div className='grid mb-5 mt-4'>
                        <label form='userid'>User ID</label>
                        <input type='text' name='userid' onChange={(event) => this.setState({ user: event.target.value })}
                            className="w-full px-3 py-1 rounded border" />
                    </div>
                    <div className='grid '>
                        <label form='password'>Password</label>
                        <input type='password' name='password' onChange={(event) => this.setState({ password: event.target.value })}
                            className="w-full px-3 py-1  rounded border" />
                    </div>
                    <div className='grid'>
                        <button onClick={() => this.login(this.state)}
                            className="w-full px-3 py-2 my-5 rounded bg-blue-500 text-white font-bold"><FontAwesomeIcon icon={faUnlock} /> Login</button>

                    </div>

                </div>
            </div>
        );
    }
}

export default Login;