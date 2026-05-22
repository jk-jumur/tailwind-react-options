import { CircleCheckBig } from "lucide-react";


const PricingFeature = ({feature}) => {
    return (
           <p className="flex mt-4"><CircleCheckBig className="mr-4" color="#5a36b0" size={32}></CircleCheckBig>{feature}</p>
           
    );
};

export default PricingFeature;