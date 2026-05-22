import PricingFeature from "./PricingFeature";


const PricingCard = ({pricing}) => {
       const{name, price, description, features} = pricing;
    return (
        <div className="flex flex-col border bg-amber-400 rounded-3xl p-3 text-white">
            {/* card header */}
            <div>
                  <h1 className="text-6xl text-white">{name}</h1>
                 <h3 className="text-white">{price}</h3>
            </div>

            {/* card body */}
             <div className="bg-amber-300 p-2 mt-10  flex-1 rounded-2xl  ">
                <p>{description}</p>
                 {
                    features.map((feature, index) => <PricingFeature  key={index} feature={feature}></PricingFeature>) 
                 }
             </div>
             <button className="btn w-full 
              bg-pink-300 text-white  mt-3 md:mt-4 hover:bg-pink-500 rounded-2xl">Subscribe</button>
        </div>
    );
};

export default PricingCard;