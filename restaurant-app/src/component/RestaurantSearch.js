import React, { Component } from 'react';


class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null
        }
    }
    search(key) {
        console.warn(key);
        fetch(`${process.env.REACT_APP_API_URL}/restaurant?name=${key}`).then((data) => {
            data.json().then((result) => {
                console.log(result);
                this.setState({ searchData: result })
            }).catch((error) => { console.error(error); })
        }).catch((error) => { console.error(error); })
    }
    render() {
        return (
            <div className='text-xl mt-10'>
                <h1>Restaurant Search</h1>
                <input onChange={(event) => this.search(event.target.value)} type='text' className='mt-5 border' />
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
        );
    }
}

export default RestaurantSearch;