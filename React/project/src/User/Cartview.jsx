import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase';
import { where, query, collection, getDocs, getDoc, doc, addDoc,deleteDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { getCartData } from '../Redux/Product';
import { useNavigate } from 'react-router-dom';


function Cartview() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('users'));
    const [total, settotal] = useState(0);
    const dispatch = useDispatch();
    const { isloading, cartarray, error } = useSelector((state) => state.product);

    const addPayment = async (payObj) => {
        payObj['userId'] = user.id;
        console.log("infunction", payObj);
        try {
            const docRef = collection(db, 'orders');
            const res = await addDoc(docRef, payObj);
            if (res) {
                const q = query(
                    collection(db, "cart"),
                    where("userId", "==", user.id)
                );

                const snapShot = await getDocs(q);
                
                snapShot.forEach(async (item) => {
                    
                    await deleteDoc(doc(db, "cart", item.id));
                });

                console.log("All cart items deleted successfully");

                alert("Payment Successful");
                navigate('/')
            }

        } catch (error) {
            console.log(error);

            alert("somting wrong")
        }

    }

    //     order:
    // razorpayid,
    // status
    // userid
    // amount

    // cart remove

    const handlePayment = (total) => {
        const user = localStorage.getItem('users')
        const options = {
            key: "rzp_test_GqyF5g931GFt3g", // from Razorpay dashboard
            amount: 1 * 100, // ₹500 (in paise)
            currency: "INR",
            name: "My Shop",
            description: "Test Transaction",
            handler: function (response) {
                console.log("Payment Success:", response);
                let successObj = {
                    razorpay_payment_id: response.razorpay_payment_id,
                    amountt: total,
                    status: 'success',
                }
                addPayment(successObj)



            },
            prefill: {
                name: user.username,
                email: user.email,
                contact: user.contact,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    useEffect(() => {
        dispatch(getCartData(user.id))

    }, [])

    useEffect(() => {
        let ttl = cartarray ? cartarray.reduce((sum, index) => sum + (index.qty * index.product.price), 0) : 0;
        console.log(ttl);
        settotal(ttl)
    }, [isloading])

    return (
        <div>
            <Navbar />

            <div className="container p-20">

                <h2 className='text-2xl'>Cart Details</h2>
                {
                    isloading && <p>Loading....</p>
                }
                <table class="table-auto border-collapse border border-gray-400 ">
                    <thead>
                        <tr>
                            <th class="border border-gray-300 p-5">Srno</th>
                            <th class="border border-gray-300 ...">ProductName</th>
                            <th class="border border-gray-300 ...">Image</th>
                            <th class="border border-gray-300 ...">Price</th>
                            <th class="border border-gray-300 ...">Qty</th>
                            <th class="border border-gray-300 ...">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartarray && cartarray.map((index, i) => (

                                <tr key={i}>
                                    <td class="border border-gray-300 p-5">{i + 1}</td>
                                    <td class="border border-gray-300 p-5">{index.product.pname}</td>
                                    <td class="border border-gray-300 p-5">
                                        <img src={index.product.pimage} alt="" height={"50px"} width={"50px"} />
                                    </td>
                                    <td class="border border-gray-300 p-5">{index.product.price}</td>
                                    <td class="border border-gray-300 p-5">{index.qty}</td>
                                    <td class="border border-gray-300 p-5">{index.product.price * index.qty}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total:</th>
                            <th>{total}</th>
                            <button className='bg-blue-400 text-white p-2 rounded' onClick={() => {
                                handlePayment(total)
                            }}>Buy Now</button>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}

export default Cartview