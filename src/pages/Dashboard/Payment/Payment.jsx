import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useClass from "../../../hooks/useSelectClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
    const [cart] = useClass();
    const total = cart.reduce((sum, item) => sum + item.price, 0)
     const price=parseFloat(total.toFixed(2))
    return (
        <div className="bg-cyan-100 p-10 rounded-xl">

            <Elements stripe={stripePromise}>
                <CheckOut price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;