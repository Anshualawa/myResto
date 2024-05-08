import React, { useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faArrowLeft, faTrash, faCheck, faAngleRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const OrderForm = () => {

    const initialState = 1;
    const reducer = (state, action) => {
        if (action.type === 'increment') {
            return state + 1;
        }
        if (action.type === 'decrement') {
            return state - 1;
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, 1);

    const [formData, setFormData] = useState({
        item_id: '',
        item_name: '',
        quantity: 1,
        address: '',
        payment_status: 'Cash',
        remark: '',
    });

    const [showOrderCard, setShowOrderCard] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, such as sending data to a backend server
        console.log('Form submitted:', formData);
        setShowOrderCard(true);
    };

    return (
        <div className='w-2/5 m-auto h-dvh bg-slate-50'>
            <div className="max-w-md mx-auto">
                <div className='flex gap-2 items-center py-6 p-3 border-b-2 bg-white'> <FontAwesomeIcon icon={faArrowLeft} />Back</div>
                <div className='m-3 p-3 border text-xs tracking-wider text-green-700 border-white rounded-xl shadow-md bg-gradient-to-r from-green-50 via-green-100 to-green-200'><p><span className=' font-semibold'>$50 Saved!</span> Save more on every order with One membership</p></div>
                <div className='flex justify-between px-3 text-sm text-slate-700'><span>Review Items</span><span>Clear cart <FontAwesomeIcon icon={faTrash} /></span></div>
                <div className='flex justify-between items-center my-2 mx-3 pr-5 p-3 bg-white text-slate-500 rounded-xl shadow-md'><p>Deliver items without carry bag</p> <input type='checkbox' /></div>
                <div className='bg-white rounded-xl shadow-md my-2 mx-3  px-3 py-1 '>

                    <div className='flex gap-2 p-1 my-1 text-xs text-slate-700 items-center'>
                        <div className='w-12 p-1 bg-indigo-50 rounded-md'>
                            <img src='fast-food-burger.jpg' alt='item img' className='w-full' />
                        </div>
                        <div className=''><p>Bingo Original Style Chilli Sprinkled Potato Chips</p></div>
                        <div className='flex  gap-2 border px-3 py-1 rounded-md text-green-600 font-semibold'>
                            <button onClick={() => dispatch({ type: "decrement" })} className={`${state == 0 ? 'pointer-events-none' : ''}`}>-</button>
                            <p>{state}</p>
                            <button onClick={() => dispatch({ type: "increment" })}>+</button>
                        </div>
                        <div className=''>
                            <p className='text-slate-500 text-[9px] text-right line-through'>₹144</p>
                            <p>₹122</p>
                        </div>
                    </div>

                    <div className='flex gap-2 p-1 my-1 text-xs text-slate-700 items-center'>
                        <div className='w-12 p-1 bg-indigo-50 rounded-md'>
                            <img src='fast-food-burger.jpg' alt='item img' className='w-full' />
                        </div>
                        <div className=''><p>Bingo Original Style Chilli Sprinkled Potato Chips</p></div>
                        <div className='flex  gap-2 border px-3 py-1 rounded-md text-green-600 font-semibold'>
                            <button onClick={() => dispatch({ type: "decrement" })} className={`${state == 0 ? 'pointer-events-none' : ''}`}>-</button>
                            <p>{state}</p>
                            <button onClick={() => dispatch({ type: "increment" })}>+</button>
                        </div>
                        <div className=''>
                            <p className='text-slate-500 text-[9px] text-right line-through'>₹144</p>
                            <p>₹122</p>
                        </div>
                    </div>


                    <div className='flex gap-2 p-1 my-1 text-xs text-slate-700 items-center'>
                        <div className='w-12 p-1 bg-indigo-50 rounded-md'>
                            <img src='fast-food-burger.jpg' alt='item img' className='w-full' />
                        </div>
                        <div className=''><p>Bingo Original Style Chilli Sprinkled Potato Chips</p></div>
                        <div className='flex  gap-2 border px-3 py-1 rounded-md text-green-600 font-semibold'>
                            <button onClick={() => dispatch({ type: "decrement" })} className={`${state == 0 ? 'pointer-events-none' : ''}`}>-</button>
                            <p>{state}</p>
                            <button onClick={() => dispatch({ type: "increment" })}>+</button>
                        </div>
                        <div className=''>
                            <p className='text-slate-500 text-[9px] text-right line-through'>₹144</p>
                            <p>₹122</p>
                        </div>
                    </div>


                </div>
                {/* <div className='text-sm p-3 bg-indigo-50'>Missed Something? Search or Browse Store</div> */}

                <div className='bg-white rounded-xl shadow-md my-2 mx-3  px-4 py-3  '>
                    <h1 className='flex justify-between items-center text-sm text-slate-600'>Apply coupon <FontAwesomeIcon icon={faAngleRight} /></h1>
                    <p className='text-xs text-slate-400'>Save more with coupons available for you</p>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;