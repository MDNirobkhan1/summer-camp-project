import { Link } from "react-router-dom";


const ErrorPage = () => {
    const url='https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg?size=626&ext=jpg&ga=GA1.2.245820730.1684362544&semt=ais'
    return (
        <div>
            <div className='grid justify-center text-center'>
                <img className=' w-full mt-10 ' src={url} alt="" />
                <p className='text-2xl'>This page doesnt exist!</p>
                <p className='font-bold text-6xl'>404</p>
                <p className='text-3xl'>Error</p>
                <Link to='/'><button className='text-gray-100 font-bold rounded-md mt-2 p-2 bg-red-300'>Pleaes Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;