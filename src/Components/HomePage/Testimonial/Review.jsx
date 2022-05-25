// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Review = () => {
    return (
        <>
            <div className="py-28">
                <div class="mt-10  container mx-auto flex flex-col md:flex-row shadow-lg overflow-hidden ">
                    <div class=" w-[100%] relative  py-2 md:py-24 bg-indigo-700 md:w-1/2 flex flex-col item-center justify-center">
                        <div class="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

                        <div class="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
                            <span class="md:block">What Our</span>
                            <span class="md-block">Customers</span>
                            <span class="block">Are Saying!</span>
                        </div>
                    </div>
                    <div className="md:w-[50%]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log("slide change")}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div class="bg-white">
                                    <div class="flex flex-col h-full relative">
                                        <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                                            </svg>
                                        </div>

                                        <div class="h-full relative z-10">
                                            <div>
                                                <p class="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                                                    Leverage agile frameworks to
                                                    provide a robust synopsis
                                                    for high level overviews.
                                                    Iterative approaches to
                                                    corporate strategy foster
                                                    collaborative thinking to
                                                    further the overall value
                                                    proposition. Organically
                                                    grow the holistic world view
                                                    of disruptive innovation via
                                                    workplace diversity and
                                                    empowerment.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex my-4 justify-center items-center"></div>

                                        <div class="flex justify-center px-6 pt-2 pb-6 md:py-6">
                                            <div
                                                class="text-center"
                                                x-show="testimonialActive == 1"
                                            >
                                                <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">
                                                    John Doe
                                                </h2>
                                                <small class="text-gray-500 text-xs md:text-sm truncate">
                                                    CEO, ABC Inc.
                                                </small>
                                            </div>

                                            <div
                                                class="text-center"
                                                x-show="testimonialActive == 2"
                                            >
                                                <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">
                                                    Winter Doe
                                                </h2>
                                                <small class="text-gray-500 text-xs md:text-sm truncate">
                                                    CTO, XYZ Corp.
                                                </small>
                                            </div>

                                            <div class="text-center">
                                                <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">
                                                    John Wick
                                                </h2>
                                                <small class="text-gray-500 text-xs md:text-sm truncate">
                                                    Product Manager, Fake Corp.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
