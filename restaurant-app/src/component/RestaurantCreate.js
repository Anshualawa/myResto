import React, { Component } from 'react';


class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }
    create() {
        // console.log(this.state);
        fetch(`${process.env.REACT_APP_API_URL}/restaurant`, {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((reuslt) => {
                console.log(reuslt);
                alert(`Restaurant ${reuslt.name} has been added`)
            })
        })
    }
    // componentDidMount(){

    // }
    render() {
        return (
            <div className="max-w-lg mx-auto mt-8 p-6 bg-white border rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Restaurant Create</h1>
                <div className="space-y-4">
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Enter Your Name"
                    />
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Enter Your Email"
                    />
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="number"
                        onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Enter Your Rating"
                    />
                    <input
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Enter Your Address"
                    />
                    <button
                        className="block w-full bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200"
                        onClick={() => { this.create() }}
                    >
                        Add Restaurant
                    </button>
                </div>
            </div>

        );
    }
}

export default RestaurantCreate;