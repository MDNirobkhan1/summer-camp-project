/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";






const CheckOut = ({ price }) => {


    // const navigate = useNavigate();


    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                
            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card', card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)

        }
        else {
            console.log('payment method card', paymentMethod);
            setCardError('')

        }

        

        


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className="p-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',

                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-active bg-teal-300 mt-2 " type="submit"
                    disabled={!stripe}>
                    Payment
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
        </>
    );
};

export default CheckOut;