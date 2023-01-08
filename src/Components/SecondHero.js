import React from 'react';
import shoe from './images/ghura-juta.gif';

const SecondHero = () => {
    return (
        <div className="hero  bg-white">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className=''>
          <img src={shoe} alt='' className="w-3/4 mx-auto" />
            </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default SecondHero;