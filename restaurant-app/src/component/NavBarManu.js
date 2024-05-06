import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faSearch, faAdd, faUser, faBars, faBowlFood } from '@fortawesome/free-solid-svg-icons';

class NavBarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }));
    };

    render() {
        const { showMenu } = this.state;

        return (
            <div className="bg-indigo-500 text-white">
                <div className='container mx-auto px-4 md:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4'>
                        <div className='flex items-center'>
                            <p className='text-2xl md:text-3xl lg:text-4xl font-bold'><Link to="/">(^_^)</Link></p>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={this.toggleMenu} className="text-xs hover:bg-slate-200 hover:text-black p-2">
                                Menu <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                        <div className={`md:flex justify-between items-center gap-5 ${showMenu ? 'block' : 'hidden'}`}>
                            <NavLink to="/" icon={faHome}>Home</NavLink>
                            <NavLink to="/hunger" icon={faBowlFood}>Hungger</NavLink>
                            {
                                localStorage.getItem('login') ?
                                    <>
                                        <NavLink to="/list" icon={faList}>List</NavLink>
                                        <NavLink to="/create" icon={faAdd}>Create</NavLink>
                                        <NavLink to="/search" icon={faSearch}>Search</NavLink>
                                        <NavLink to="/logout" icon={faUser}>Logout</NavLink>
                                    </>
                                    :
                                    <NavLink to="/login" icon={faUser}>Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const NavLink = ({ to, icon, children }) => (
    <div className='p-2 text-xs md:text-lg lg:text-xl hover:bg-slate-200 hover:text-black rounded-xl border'>
        <Link to={to} className="flex items-center">
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {children}
        </Link>
    </div>
);

export default NavBarMenu;
