import React from 'react'
import { serviceCategories } from '../categoryDummy'
import arrow from '../assets/arrow.svg'
import '../styles/services.css'

export default function Services() {
    return (
        <>
            {serviceCategories.map((item) =>

                <div className="col-3 d-flex flex-column align-items-center">
                    <img src={item.icon} className='category-data' alt="" />
                    <img src={arrow} className='category-arrow' alt="" />
                    <p className="service-text">{item.value}</p>
                </div>
            )}

        </>
    )
}
