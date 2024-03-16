import React from 'react'
import '../styles/landingPage.css'
import bgimg from "../assets/cover-img.png"
import Services from './Services'
import { useNavigate } from 'react-router-dom'



export default function LandingPage() {

    const navigate=useNavigate()
    return (
        <div>
            <div className="Landing-Section">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-md-6">
                            <div className="row mt-5">
                                <h1 className='head-text'>From Online to Offline</h1>
                                <p className="sub-text">One stop solution for all your needs</p>
                                <p className='sub-para-text'>
                                    Shop from online sites, at offline retail stores, pay your Utility Bills or buy brand Vouchers,
                                    all under one roof and stand a chance to win cash rewards worth lakhs and crores every month on
                                    your regular day-to-day sho
                                </p>
                            </div>
                            <h1 className='mt-2 shopby-text'>Shop by <span className='fw-bolder'>Categories</span></h1>
                            <div className="row mt-4">

                                {/* Service content */}
                                <Services />

                            </div>
                            <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-warning m-1"
                  onClick={() => navigate("/calcpage")}
                >
                  CALC PAGE
                </button>

                <button
                  type="button"
                  className="btn btn-warning m-1"
                  onClick={() => navigate("/numpage")}
                >
                  NUM PAGE
                </button>
              </div>

                        </div>
                        <div className="col-md-6  pt-5" >
                            <img src={bgimg} class="img-fluid" alt="..." />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
