import React, { Component } from 'react';
import NavBarManu from './NavBarManu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null
        }
    }
    search(key) {
        // console.warn(key);
        fetch(`${process.env.REACT_APP_API_URL}/restaurant?name=${key}`).then((data) => {
            data.json().then((result) => {
                // console.log(result);
                this.setState({ searchData: result })
            }).catch((error) => { console.error(error); })
        }).catch((error) => { console.error(error); })
    }
    render() {
        return (
            <>
                <NavBarManu />
                <div className='w-4/5 m-auto'>
                    <div className='text-xl mt-10 text-center'>
                        <h1>Restaurant Search</h1>
                        <div className='w-2/5 m-auto mt-5 p-3 px-5 border flex justify-center items-center gap-3 rounded-full hover:shadow-lg'>
                            <FontAwesomeIcon icon={faSearch} className='text-gray-500'/>
                            <input onChange={(event) => this.search(event.target.value)} type='text' placeholder='Search here...' className='w-full focus-within:outline-none active:border-none focus-visible:outline-none' />
                        </div>
                        <div className='mt-5 w-2/5 m-auto'>
                            {this.state.searchData ?
                                this.state.searchData.map((item, index) => {
                                    return <div key={index} className='border p-2 my-1 flex justify-between'>

                                        <span>{item.name}</span>
                                        <span>{item.email}</span>
                                        <span>{item.rating}</span>
                                    </div>
                                })
                                :
                                <div className='mt-5'>***No Data Found***</div>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RestaurantSearch;