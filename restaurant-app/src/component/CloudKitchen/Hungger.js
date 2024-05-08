import React, { useEffect, useState } from 'react';
import NavBarMenu from '../NavBarManu';


const Hungger = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/cloudKitchen_food_items`).then((response) => {
            response.json().then((result) => {
                // console.log(result);
                setItems(result);
            }).catch((error) => { console.log(error); })
        }).catch((error) => { console.log(error); })

    }, [])


    return (
        <div className='w-4/5 m-auto '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((foodItem, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <img src={foodItem.image} alt={foodItem.name} className="w-full h-32 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{foodItem.name}</h2>
                            <p className="text-gray-700 mb-2">{foodItem.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">${foodItem.price}</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};





const OrderForm = () => {
    const [formData, setFormData] = useState({
        customer_id: '',
        order_id: '',
        item_id: '',
        item_name: '',
        item_qty: 0,
        price: 0,
        address: '',
        payment_status: '',
        datetime: '',
        remark: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, such as sending it to a server or processing it further
        console.log(formData);
        // Reset the form fields
        setFormData({
            customer_id: '',
            order_id: '',
            item_id: '',
            item_name: '',
            item_qty: 0,
            price: 0,
            address: '',
            payment_status: '',
            datetime: '',
            remark: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="customer_id">Customer ID:</label>
                <input type="text" id="customer_id" name="customer_id" value={formData.customer_id} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="order_id">Order ID:</label>
                <input type="text" id="order_id" name="order_id" value={formData.order_id} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="item_id">Item ID:</label>
                <input type="text" id="item_id" name="item_id" value={formData.item_id} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="item_name">Item Name:</label>
                <input type="text" id="item_name" name="item_name" value={formData.item_name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="item_qty">Item Quantity:</label>
                <input type="number" id="item_qty" name="item_qty" value={formData.item_qty} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="payment_status">Payment Status:</label>
                <input type="text" id="payment_status" name="payment_status" value={formData.payment_status} onChange={handleInputChange} />
            </div>
            {/* <div>
                <label htmlFor="datetime">Date & Time:</label>
                <input type="datetime-local" id="datetime" name="datetime" value={formData.datetime} onChange={handleInputChange} />
            </div> */}
            <div>
                <label htmlFor="remark">Remark:</label>
                <textarea id="remark" name="remark" value={formData.remark} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};



export default Hungger;