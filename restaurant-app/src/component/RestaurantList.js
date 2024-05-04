import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import NavBarManu from './NavBarManu';
class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            currentPage: 1,
            itemsPerPage: 10,
        }
    }
    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch(`${process.env.REACT_APP_API_URL}/restaurant`).then((responce) => {
            responce.json().then((result) => {
                // console.warn(result);
                this.setState({ list: result });
            }).catch((error) => {
                console.warn("After Fetch Error :", error);
            })
        }).catch((error) => {
            console.warn("Before Fetch Error :", error);
        })
    }

    getCurrentData() {
        const { list, currentPage, itemsPerPage } = this.state;;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return list.slice(indexOfFirstItem, indexOfLastItem);
    }

    changePage = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }

    renderPagination() {
        const { list, currentPage, itemsPerPage } = this.state;
        const totalPages = Math.ceil(list.length / itemsPerPage);
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => this.changePage(i)}
                    className={`px-3 py-1 mx-1 rounded ${currentPage === i ? 'bg-blue-300 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {i}
                </button>
            );
        }
        return (<div className='flex justify-center mt-4'>{pageNumbers}</div>)
    }


    Delete(params) {
        fetch(`${process.env.REACT_APP_API_URL}/restaurant/${params}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            response.json().then((reuslt) => {
                console.log(reuslt);
                this.getData();
                alert(`!Restaurant details of  ${reuslt.name} has been Deleted!`)
            }).catch((error) => {
                console.error(error);
            })
        }).catch((error) => {
            console.error(error);
        })
    }


    render() {
        return (
            <>
                <NavBarManu />
                <div className='w-4/5 m-auto  '>
                    <h1 className='text-xl py-5 text-center font-bold text-gray-700'>Restaurant List</h1>
                    {
                        this.state.list ?
                            <div className=' bg-gray-50 border'>
                                <div className="overflow-x-auto ">
                                    <table className="table-auto border min-w-full divide-y divide-gray-200">
                                        <thead className='bg-gray-50 '>
                                            <tr>
                                                <th className='px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider'>S.No</th>
                                                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                                                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                                                <th className='px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider'>Address</th>
                                                <th className='px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider'>Rating</th>
                                                <th className='px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider'>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200'>
                                            {
                                                this.getCurrentData().map((item, index) => {
                                                    const serialNumber = (this.state.currentPage - 1) * this.state.itemsPerPage + index + 1;
                                                    return <tr key={index} className="hover:bg-gray-100">
                                                        <td className='px-6 py-3 text-center whitespace-nowrap'>{serialNumber}</td>
                                                        <td className='px-6 py-3 text-left whitespace-nowrap'>{item.name}</td>
                                                        <td className='px-6 py-3 text-left whitespace-nowrap'>{item.email}</td>
                                                        <td className='px-6 py-3 text-left whitespace-nowrap'>{item.address}</td>
                                                        <td className='px-6 py-3 text-center whitespace-nowrap'>{item.rating}</td>
                                                        <td className='px-6 py-3 text-center whitespace-nowrap'>
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
                                    {this.renderPagination()}
                                </div>
                            </div>
                            :
                            <div className='w-1/4 m-auto size-24 flex justify-center items-center  bg-white border rounded-lg shadow-xl'>
                                <p className='text-xl text-indigo-400 font-semibold'>Please Wait . . .</p>
                            </div>

                    }
                </div>
            </>
        );
    }
}

export default RestaurantList;