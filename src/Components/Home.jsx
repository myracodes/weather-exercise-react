import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const [city, setCity] = useState("");
const reset = () => { setCity("") };


export const Home = () => {
    return (
        <div>

            <input name="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Home;