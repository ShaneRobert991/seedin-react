import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/Services';


const ServiceSidebar = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="service-sidebar">
            <div className="service-catagory">
                <ul>
                    {Services.slice(0, 5).map((Service, item) => (
                        <li key={item}>
                            <Link onClick={ClickHandler} to={`/service-single/${Service.slug}`}>
                                <i className={Service.icon}></i>{Service.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="service-info">
                <div className="icon">
                    <i className="flaticon-phone-call"></i>
                </div>
                <h2>Looking for
                    logistics service
                    Provider?</h2>
                <span>Call anytime</span>
                <div className="num">
                    <span>+(2) 871 382 023</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceSidebar;