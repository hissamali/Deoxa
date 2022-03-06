import React from 'react'
import "./Home.css"
import hero from "../../images/hero-1.png"

const Home = () => {
    return (

        <div id="home">
            <header className="header-container">
                <div className="header-left">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="text">CREATIVE MARKETING</p>
                            <div className="hero-section">
<<<<<<< HEAD
                                <h2 className="hero-1">
                                    Get Your Professional <br /> Website Done With
                                    <span className="Deoxa"> Deoxa</span></h2> <div>
=======
                                <h3 className="hero-1">
                                    Get Your Professional Website Done With
                                    <span className="Deoxa"></span></h3> <div>
>>>>>>> 13365ca1b3a272a0a66b6a00f2655e42dd3f7397
                                    <p className="text-muted mb-4 pb-2 hero-para">At vero eos et accusamus
                                        iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos at dolores molestias excepturi sint occaecati cupiditate.
                                    </p>
                                    <div className="hero-btn">
                                        <button>Find Out How <span>→</span> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="hero-1">
                        <img src={hero} alt="hero" className="hero-image1" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
