import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faSearch, faAdd, faUser } from '@fortawesome/free-solid-svg-icons';

class NavBarManu extends Component {
    render() {
        return (
            <div>
                <div className='w-full m-auto flex justify-center bg-indigo-500 text-white'>
                    <div className='w-1/6 flex justify-center items-center '><p className='text-2xl font-bold'><Link to="/">Vendors</Link></p></div>
                    <div className='w-3/5'>
                        <div className='flex py-2 justify-between gap-4 '>
                            <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full text-center'><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></div>
                            {
                                localStorage.getItem('login') ?
                                    <>
                                        <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full text-center'><Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></div>
                                        <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full text-center'><Link to="/create"><FontAwesomeIcon icon={faAdd} /> Create</Link></div>
                                        <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full text-center'><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></div>
                                        <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full text-center'><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout</Link></div>
                                    </>
                                    :
                                    <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full text-center'><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link></div>
                            }
                            {/* <div className='p-2 text-xl hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/details">Details</Link></div> */}
                            {/* <div className='p-2 hover:shadow hover:bg-slate-200 font-bold hover:text-black rounded-md  size-full'><Link to="/update">Update</Link></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBarManu;