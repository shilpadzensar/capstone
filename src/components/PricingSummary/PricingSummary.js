import React,  {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import './PricingSummary.scss';


const COL__6 = "aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1";

const pricingTotal = (subTotal, coupan, giftcard, estimated)=> subTotal ? Math.round((subTotal - coupan - giftcard + estimated) * 100.0) / 100.0 : 0.00 ;

const PricingSummary = (prop) => {

    const [estimatedTotal , pricingSummary] = useState(0);  
    const [subTotal , setSubTotal] = useState(0);
    const [coupan , setCoupan] = useState(77.60);
    const giftcard = 100.00;
    const estimated = 23.28;
   
    let cart = useSelector((state) => state.cart.cart);
   
    useEffect(() => {
      
        if(cart.length){
            let totalAmount = 0;
            cart.forEach((product)=>{
                totalAmount = totalAmount + (product.price*product.quantity);                
            });
            setSubTotal(totalAmount);
            setCoupan( totalAmount > 150 ? coupan : 0);                     
            pricingSummary(pricingTotal(totalAmount, coupan, giftcard, estimated ));
        }
      }, [cart]);


    return (
        <section className={`summary ${prop.border}`}>
            <h5>Pricing Summary</h5>
            <section className="__summary aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__6}>
                    Subtotal
                </div>
                <div className={COL__6}>
                    {subTotal && `$ ${subTotal}`}
                </div>

                <div className={COL__6}>
                    Coupon
                </div>
                <div className={COL__6}>
                    {coupan && `$ ${coupan}`}
                </div>

                <div className={COL__6}>
                    Gift Card
                </div>
                <div className={COL__6}>
                    {giftcard && `$ ${giftcard}`}
                </div>

                <div className={COL__6}>
                    Estimated Task
                </div>
                <div className={COL__6}>
                    {estimated && `$ ${estimated}`}
                </div>

                <div className={COL__6}>
                    Estimated Shipping
                </div>
                <div className={COL__6}>
                    FREE
                </div>
                <div className={`strong ${COL__6}`}>
                    Estimated total
                </div>
                <div className={`strong ${COL__6}`}>
                    {estimatedTotal && `$ ${estimatedTotal}`}
                </div>
            </section>
        </section>
    );
};

export default PricingSummary;