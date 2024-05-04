import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarManu from './NavBarManu';
function RestaurantUpdate() {
    const [state, setState] = useState({
        name: '',
        email: '',
        address: '',
        rating: ''
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/restaurant/${id}`).then((response) => {
            response.json().then((result) => {
                // console.log(result);
                setState({
                    name: result.name,
                    email: result.email,
                    address: result.address,
                    rating: result.rating.toString() // Convert rating to string
                });
            });
        });
    }, [id]);

    function Update() {
        console.log(state);
        fetch(`${process.env.REACT_APP_API_URL}/restaurant/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then((response) => {
            response.json().then((result) => {
                // console.log(result);
                alert(`Restaurant ${result.name} has been updated`);
            });
        });
    }

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white border rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Restaurant Details Update</h1>
            <form onSubmit={(event) => { event.preventDefault(); Update(); }}>
                <div className="space-y-4">
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        onChange={(event) => { setState({ ...state, name: event.target.value }) }}
                        value={state.name}
                        placeholder="Enter Your Name" />
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        onChange={(event) => { setState({ ...state, email: event.target.value }) }}
                        value={state.email}
                        placeholder="Enter Your Email" />
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="number"
                        onChange={(event) => { setState({ ...state, rating: event.target.value }) }}
                        value={state.rating}
                        placeholder="Enter Your Rating" />
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        onChange={(event) => { setState({ ...state, address: event.target.value }) }}
                        value={state.address}
                        placeholder="Enter Your Address" />
                    <button type="submit"
                        className="block w-full bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200">
                        Update Restaurant
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RestaurantUpdate;