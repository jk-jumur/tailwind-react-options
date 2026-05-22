
import { Suspense } from 'react'
import './App.css'


import Navbar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'


const pricingPromise = fetch('pricingData.json')
.then(res => res.json())

function App() {
 

  return (
    <>
      <header>
           <Navbar></Navbar>
         {/* <DaisyNav></DaisyNav> */}

      </header>
      <main>
          <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
               <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>

          <ResultChart></ResultChart>
      </main>
       
 

      

    </>
  )
}

export default App
