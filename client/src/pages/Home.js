import React from 'react';

const Home = () => {
    return(
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/im-all-ears.jpg`} alt="elephant" style={{width: "100%"}}></img>
        </div>
    )
}

export default Home;