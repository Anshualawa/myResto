import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/restaurant").then((responce) => {
            responce.json().then((result) => {
                // console.warn(result);
                this.setState({ list: result });
            })
        })
    }


    Delete(params) {
        fetch("http://localhost:3001/restaurant/" + params, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            response.json().then((reuslt) => {
                console.log(reuslt);
                alert(`!Restaurant details of  ${reuslt.name} has been Deleted!`)
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div className='w-4/5 m-auto '>
                            <div className="overflow-x-auto">
                                <table className="table-auto border min-w-full divide-y divide-gray-200">
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>S.No</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Address</th>
                                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Rating</th>
                                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {
                                            this.state.list.map((item, index) => {
                                                return <tr key={index} className="hover:bg-gray-100">
                                                    <td className='px-6 py-4 text-center whitespace-nowrap'>{index + 1}</td>
                                                    <td className='px-6 py-4 text-left whitespace-nowrap'>{item.name}</td>
                                                    <td className='px-6 py-4 text-left whitespace-nowrap'>{item.email}</td>
                                                    <td className='px-6 py-4 text-left whitespace-nowrap'>{item.address}</td>
                                                    <td className='px-6 py-4 text-center whitespace-nowrap'>{item.rating}</td>
                                                    <td className='px-6 py-4 text-center whitespace-nowrap'>
                                                        <div className=' flex gap-5 justify-center'>
                                                            <span className='text-blue-500'><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faPenToSquare} /></Link></span>
                                                            <span className='text-red-500' onClick={() => { this.Delete(item.id) }}><FontAwesomeIcon icon={faTrash} /></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className='w-1/4 m-auto size-24 flex justify-center items-center  bg-white border rounded-lg shadow-xl'>
                            <p className='text-xl text-indigo-400 font-semibold'>Please Wait . . .</p>
                        </div>

                }
            </div>
        );
    }
}

export default RestaurantList;