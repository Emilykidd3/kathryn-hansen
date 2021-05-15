import React from 'react';
import {ViewHolder} from '../components/ViewHolder';

const Home = () => {
    return(
        <ViewHolder>
            <img src={`${process.env.PUBLIC_URL}/images/im-all-ears.jpg`} alt="elephant" style={{width: "100%"}}></img>
            <div className="" style={{ position: "absolute", top: "90%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                text lorem ipsum words text lorem ipsum words text lorem ipsum words text lorem ipsum words text lorem ipsum words text lorem ipsum words text lorem ipsum words text lorem ipsum words text lorem ipsum words 
            </div>
        </ViewHolder>
    )
}

export default Home;