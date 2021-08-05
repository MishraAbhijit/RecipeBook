import React from 'react';
import './HomeBody.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function HomeBody({ ...dataSet }) {
    console.log(dataSet);
    return (
        <div className="body-section">
            <section className="body-section-content">
                <h1 style={{ marginLeft: '25px', paddingTop: '25px' }}>{dataSet.headerName}</h1>
                <div className="meal-container">
                    {
                        dataSet.data.map((data) => {
                            console.log("data... " + data);
                            return (<div className="home-card" key={data.mealId} onClick={() => { window.location.href = data.url }}>
                                {console.log('absolute path... ' + dataSet.singlePath)}
                                <img className="home-image" src={data.imageUrl} alt="avtar" />
                                <div className="home-container">
                                    <h4><b>{data.mealName}</b></h4>
                                </div>
                            </div>);
                        }
                        )
                    }

                    {/*<div className="card">
                        <img className="image" src="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg" alt="avtar" />
                        <div className="container">
                            <h4><b>Chicken Handi</b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src="https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg" alt="avtar" />
                        <div className="container">
                            <h4><b>Matar Paneer</b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src="https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg" alt="avtar" />
                        <div className="container">
                            <h4><b>Lamb Biryani</b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src="https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg" alt="avtar" />
                        <div className="container">
                            <h4><b>Recheado Masala Fish</b></h4>
                        </div>
                    </div>*/
                    }

                    <a href={dataSet.linkPath}><NavigateNextIcon fontSize="large" className="nextBtn" /></a>

                </div>
            </section>
        </div>
    )
}
