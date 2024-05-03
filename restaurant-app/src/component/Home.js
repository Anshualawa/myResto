import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faSearch } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        );
    }
}



function Navbar() {
    return (
        <div className='w-full m-auto flex justify-center bg-indigo-500 text-white'>
            <div className='w-1/6 flex justify-center items-center '><p className='text-2xl font-bold'><Link to="/">Logo</Link></p></div>
            <div className='w-2/5'>
                <div className='flex py-2 gap-10'>
                    <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></div>
                    <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/list"><FontAwesomeIcon icon={faList} /></Link></div>
                    <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/create">Create</Link></div>
                    <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/details">Details</Link></div>
                    {/* <div className='p-2 hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/update">Update</Link></div> */}
                </div>
            </div>
        </div>
    )
}
export { Navbar }
export default Home;