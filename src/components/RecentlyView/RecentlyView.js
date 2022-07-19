import React from "react";
import './RecentlyView.scss';
const product2 = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
const product3 = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
const product44 = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";


const RecentlyView = () => {
    return (
        <>
            <section className="show__lg recently-view-wrapper container">
                <h1 className="recent-view-heading">Recently Viewed</h1>
                <center>
                    <div className="recent-view-section">

                        <div className="recent-view-section-img">
                            <img src={product44} alt="" />
                            <h4><b>Mens Casual Premium Slim Fit</b></h4><br />
                            <p>$144</p>
                        </div>

                        <div className="recent-view-section-img">
                            <img src={product2} alt="" />
                            <h4><b>Mens Cotton Jacket</b></h4><br />
                            <p>$55.99</p>
                        </div>

                        <div className="recent-view-section-img">
                            <img src={product3} alt="" />
                            <h4><b>White Gold Plated Princess</b></h4><br />
                            <p>$9.99</p>
                        </div>


                        <div className="recent-view-section-img">
                            <img src={product44} alt="" className="rec-img" />
                            <h4><b>Mens Casual Premium Slim Fit</b></h4><br />
                            <p>$114</p>
                        </div>

                    </div>
                </center>

            </section>
        </>
    )
}

export default RecentlyView;

