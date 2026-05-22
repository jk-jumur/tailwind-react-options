import { CircleCheckBig } from "lucide-react";


const PricingFeature = ({feature}) => {
    return (
           <p className="flex mt-4"><CircleCheckBig className="mr-4"></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeature;