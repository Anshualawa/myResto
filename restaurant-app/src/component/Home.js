import React, { Component } from 'react';
import NavBarManu from './NavBarManu';
import { useNavigate } from 'react-router-dom';
class Home extends Component {
    render() {
        document.title = 'Home | Alawa';
        return (
            <div>
                <NavBarManu />
                <h1>Home Page</h1>
            </div>
        );
    }
}




function PageNotFound() {
    document.title = '404 Not Found';
    const navigate = useNavigate();
    const GoBack = () => {
        navigate('/');
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-800">Oops! Page Not Found</h2>
                <p className="mt-4 text-gray-600">The page you are looking for might have been removed or doesn't exist. Let's get you back on track!</p>
                <div className="mt-6 text-center">
                    <button
                        onClick={GoBack}
                        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600">
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}


export { PageNotFound }
export default Home;