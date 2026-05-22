import PricingFeature from "./PricingFeature";


const PricingCard = ({pricing}) => {
       const{name, price, description, features} = pricing;
    return (
        <div className="border bg-amber-400 rounded-3xl p-3 text-white">
            {/* card header */}
            <div>
                  <h1 className="text-6xl text-white">{name}</h1>
                 <h3 className="text-white">{price}</h3>
            </div>

            {/* card body */}
             <div className="bg-amber-300 p-2 mt-10 rounded-2xl">
                <p>{description}</p>
                 {
                    features.map((feature, index) => <PricingFeature  key={index} feature={feature}></PricingFeature>) 
                 }
             </div>
        </div>
    );
};

export default PricingCard;