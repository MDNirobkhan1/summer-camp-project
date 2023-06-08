/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from '../../assets/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg'



const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = data => {

    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" name='password' className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="login" />
                            </div>
                        </form>
                        <p className='text-center'>New here Create account? <Link to='/signup'><span className='text-orange-600 font-bold'>Sign Up</span></Link></p>
                    </div>
                </div>
                <div className="mr-20 w-1/2">
                    <img className="h-[600px]" src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;