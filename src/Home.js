import React from 'react';
import Banner from "./Banner";
import './Home.css';
import Card from "./Card";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className="home__section">
                <Card
                    src=""
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"

                />
                <Card
                    src=""
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"

                />
                <Card
                    src=""
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"

                />
            </div>
            <div className="home__section">
                <Card
                    src=""
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                    price="£699/night"
                />
                <Card
                    src=""
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                    price="£69/night"
                />
                <Card
                    src=""
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                    price="£159/night"
                />
            </div>
        </div>
    )
}

export default Home;
