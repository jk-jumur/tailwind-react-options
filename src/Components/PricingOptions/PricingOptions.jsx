import { use } from "react";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";
// import PricingCard from "../PricingCard/PricingCard";



const PricingOptions = ({pricingPromise}) => {
       const pricingData = use(pricingPromise)
    console.log(pricingData)
    return (
        <div>
             <h2 className="text-5xl">Get Our Membership</h2>
             <div className="grid  md:grid-cols-2  lg:grid-cols-3   gap-8 m-5">
                 {/* {
                      pricingData.map(pricing => <PricingCard key={pricing.price} pricing={pricing}></PricingCard>)
                 } */}

                 {
                     pricingData.map(pricing => <DaisyPricingCard key={pricing.price} pricing={pricing}></DaisyPricingCard>)
                 }
             </div>
        </div>
    );
};

export default PricingOptions;