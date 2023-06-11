import logo from '../../../assets/slid.jpg'
// import { animated } from '@react-spring/web'

const SectionPart = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className="max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Photography School!</h1>
                    <p className="py-6">Photography School voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SectionPart;