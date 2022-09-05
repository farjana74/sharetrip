import './Home.css';

import React from 'react';

import { BiRectangle } from 'react-icons/bi';
import { RiVipDiamondFill } from 'react-icons/ri';

import { Slider } from '@mui/material';
import { Box } from '@mui/system';

import car3 from '../../images/bus-icon-260nw-454565515 1 (Traced) (1).png';
import acpic from '../../images/Path 9607.png';
import img3 from '../../images/Vector (25).png';
import car1 from '../../images/Vector 3 (2).png';
import car2 from '../../images/Vector 3 (3).png';

function valuetext(value) {
    return `${value}°C`;
}


const Home = () => {

    const [value, setValue] = React.useState([500, 3, 213]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='container'>
            <div className="row gap-4 pb-5">
                <div className="col-md-3 range-box p-3 pb-5 ">
                    <div className='d-flex  pb-4  align-items-center justify-content-between '>
                        <div>
                            <h3 className='filter-title'>Sort & Filter</h3>
                        </div>
                        <div>
                            <h3 className='reset-title'>RESET</h3>
                        </div>
                    </div>
                    <hr className='w-100 ' />

                    {/* price range */}

                    <div>
                        <h3 className=' py-2 range-title'>Price Range</h3>
                    </div>
                    <hr />

                    {/* show price range */}

                    <div className='d-flex pb-2  align-items-center justify-content-between'>
                        <div>
                            <h6 className='min-title'>Minimum Price</h6>
                            <h3 className='min-amount'>500</h3>
                        </div>
                        <div>
                            <h6 className='max-title'>Maximum Price</h6>
                            <h3 className='max-amount'>3,213</h3>
                        </div>


                    </div>
                    <Box sx={{}}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                    <hr />
                    {/* AC and NonAC */}
                    <div>

                        <h3 className='class-title pt-2'>Class</h3>
                    </div>
                    <hr />
                    <div className='py-2'>

                        <h3 className='ac-title'> <BiRectangle className='fs-3 ac-icon' /> AC(40)</h3>
                        <h3 className='non-title'>  <BiRectangle className='fs-3 ac-icon' /> Non AC(24)</h3>

                    </div>
                    <hr />


                    <div>
                        <h3 className=' pt-2 schedule-title'>Schedule</h3>
                    </div>
                    <hr />

                    <div>
                        <h3 className='time-title py-2'>Departure Time</h3>
                    </div>

                    <div className='range-bg'>
                        <h3 className='range-title'> <BiRectangle className='fs-3 time-icon me-2 ' />  00:00 - 05:59</h3>
                    </div>
                    <div className='range-bg my-2'>
                        <h3 className='range-title'> <BiRectangle className='fs-3 time-icon me-2 ' />   06:00 - 11:59</h3>
                    </div>
                    <div className='range-bg'>
                        <h3 className='range-title'> <BiRectangle className='fs-3 time-icon me-2 ' />   12:00 - 17:59</h3>
                    </div>
                    <div className='range-bg my-2 '>
                        <h3 className='range-title'> <BiRectangle className='fs-3 time-icon me-2 ' />   18:00 - 23:59</h3>
                    </div>

                </div>

                <div className="col-md-8">
                    <h2 className='buses-title'>48 Available Buses</h2>


                    <div className='bus-box shadow  mt-2 row '>
                        <div className=' bus-bg  ps-3 pt-3 pe-5 col-md-3 '>
                            <h3 className='bus-title'><RiVipDiamondFill className='fs-4 ' /> Earliest Bus</h3>
                        </div>

                        <div className=' bus-bg  ps-3 pt-3 pe-4  col-md-3  '>
                            <h3 className='bus-title'><RiVipDiamondFill className='fs-4   ' /> Cheapest Buses</h3>
                        </div>
                        <div className=' bus-bg ps-3 pt-3 pe-4   col-md-3  d-flex'>
                            <div>


                                <img className='w-100 seats-bg ' src={img3} alt="" />

                            </div>
                            <div>
                                <h3 className='bus-title mx-2'>Available Seats</h3>
                            </div>
                        </div>

                        <div className=' bus-bg  p-2 pe-5 col-md-3  '>
                            <h3 className='bus-title'><RiVipDiamondFill className='fs-3 pe-1 ' /> Fastest Trips</h3>
                        </div>



                    </div>


                    <div className="row mt-4">
                        <div className="col-md-8  ticket-box  p-3 ">

                            <div className=' box-second '>
                                <div className=''>
                                    <h3 className='ac-title'>AC</h3>
                                </div>
                                <div className=''>
                                    <button className='enter-title px-4 py-2'>Hanif Enterprize</button>
                                    <h3 className='ctg-title pt-2 pe-2'>31-DHK-CTG(D)</h3>
                                </div>
                                <div className='d-flex  '>

                                    <div>
                                        <img className='pe-2 aspic-bg border p-1' src={acpic} alt="" />

                                    </div>
                                    <div>
                                        <h3 className='count pt-1 ps-2'>55</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <h6 className='form-title'>From </h6>
                                    <h2 className='district'>Dhaka</h2>
                                    <h1 className='mesage-titme'>11:30 PM</h1>
                                    <h6 className='counter-name'>Kolabagan Counter</h6>
                                    <h6 className='date'>22 June 2021</h6>
                                </div>
                                <div className="col-md-5 pt-3">
                                    <div className=' d-flex'>
                                        <div>
                                            <img src={car1} alt="" />
                                        </div>
                                        <div>
                                            <img className='px-2 w-100' src={car3} alt="" />
                                        </div>
                                        <div>
                                            <img src={car2} alt="" />
                                        </div>
                                    </div>
                                    <h3 className='seats-title text-center py-1'>16 Seats available</h3>
                                    <h3 className='hour-title'>6h 00m</h3>

                                </div>
                                <div className="col-md-3">
                                    <h6 className='form-title'>To </h6>
                                    <h2 className='district'>Chottogram</h2>
                                    <h1 className='mesage-titme'>05:30 AM</h1>
                                    <h6 className='counter-name'>Dampara Counter</h6>
                                    <h6 className='date'>23 June 2021</h6>
                                </div>
                            </div>

                            <div className='row gx-2 py-5'>
                                <div className='col'>
                                    <select class="form-select" aria-label="Default select example">
                                        <option className='option-title' selected>Kolabagan Counter</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <select class="form-select" aria-label="Default select example">
                                        <option className='option-title' selected>Dampara Counter</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            {/* 
                            <div className='row row-cols-2 row-cols-lg-5 g-2 '>
                                <div className='col'>
                                    <div className='d-flex'>
                                        <div>
                                            <img src={vec1} alt="" />
                                        </div>
                                        <div>
                                            <h3>2 Booked</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='d-flex'>
                                        <div>
                                            <img src={vec1} alt="" />
                                        </div>
                                        <div>
                                            <h3>2 Booked</h3>

                                        </div>
                                    </div>

                                </div>
                                <div className="col">
                                    <div className='d-flex'>
                                        <div>
                                            <img src={vec1} alt="" />
                                        </div>
                                        <div>
                                            <h3>2 Booked</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='d-flex'>
                                        <div>
                                            <img src={vec1} alt="" />
                                        </div>
                                        <div>
                                            <h3>2 Booked</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='d-flex'>
                                        <div>
                                            <img src={vec1} alt="" />
                                        </div>
                                        <div>
                                            <h3>2 Booked</h3>

                                        </div>
                                    </div>
                                </div>



                            </div> */}


                        </div>

                        <div className="col-md-4  border ">
                            <div className=' m-0 p-2 '>
                                <p className='text-end per-title'>Per Person</p>
                                <h1 className='text-end price-title'>BDT 750</h1>
                                <h3 className='text-end price-second'>BDT 775</h3>
                                <div className='text-end'>
                                    <button className='view-button border-0 my-2'>VIEW STEATS</button>
                                </div>
                                <p className='text-end cancel-title pb-4 '>Cancellation Policy</p>
                            </div>

                            <div className='d-flex mt-5'>
                                <div>
                                    <button className='seat-button'>SEAT INFO</button>
                                </div>
                                <div>
                                    <button className='policy-buton'>POLICY</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;