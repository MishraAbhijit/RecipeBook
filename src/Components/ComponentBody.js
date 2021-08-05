import React from 'react'
import '../Components/ComponentBody.css'
import CardBodyMedium from './CardBodyMedium';
import CardBody from './CardBodySmall';
export default function ComponentBody({ ...data }) {
    console.log("Data After ..... ");
    console.log(data);
    if (data.name.includes('Recipes')) {
        return (
            <div className="body-section">
                <section className="body-section-content">
                    <h1 style={{ marginLeft: '25px', paddingTop: '25px' }}>{data.name}</h1>
                    <div className="meal-container-medium">
                        {
                            data.dataSet.map((data) => {
                                console.log("data... " + data);
                                if (data) {
                                    return <CardBodyMedium {...data} />
                                }
                            }
                            )
                        }

                    </div>
                </section>
            </div>
        );
    }
    return (
        <div className="body-section">
            <section className="body-section-content">
                <h1 style={{ marginLeft: '25px', paddingTop: '25px' }}>{data.name}</h1>
                <div className="meal-container">
                    {
                        data.dataSet.map((data) => {
                            console.log("data... " + data);
                            if (data) {
                                return <CardBody {...data} />
                            }
                        }
                        )
                    }

                </div>
            </section>
        </div>
    )
}
