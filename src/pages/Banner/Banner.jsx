import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from '../../assets/Neg 2.jpg'
import logo2 from '../../assets/slid.jpg'
import logo3 from '../../assets/55.jpg'



const Banner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
            <SwiperSlide className="relative ">

                <div>
                    <div className=' absolute  h-full flex gap-40  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 bottom-0 p-8'>
                        <div className='text-white ml-20'>
                            <h1 className='text-4xl font-bold'> Photography School...</h1>
                            <p>25 BEST PHOTOGRAPHY SCHOOLS IN THE WORLD IN 2023 BY COUNTRY.</p>
                            <div className='mt-8'>
                                <button className="btn btn-primary">Red More</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img className="h-[600px] w-full" src={logo3} alt="" />
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">

                <div>
                    <div className=' absolute  h-full flex gap-40  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 bottom-0 p-8'>
                        <div className='text-white ml-20'>
                            <h1 className='text-4xl font-bold'> Photography School...</h1>
                            <p>25 BEST PHOTOGRAPHY SCHOOLS IN THE WORLD IN 2023 BY COUNTRY.</p>
                            <div className='mt-8'>
                                <button className="btn btn-primary">Red More</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img className="h-[600px] w-full" src={logo2} alt="" />
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">

                <div>
                    <div className=' absolute  h-full flex gap-40  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 bottom-0 p-8'>
                        <div className='text-white ml-20'>
                            <h1 className='text-4xl font-bold'> Photography School...</h1>
                            <p>25 BEST PHOTOGRAPHY SCHOOLS IN THE WORLD IN 2023 BY COUNTRY.</p>
                            <div className='mt-8'>
                                <button className="btn btn-primary">Red More</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img className="h-[600px] w-full" src={logo1} alt="" />
                    </div>

                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Banner;