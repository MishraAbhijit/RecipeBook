import React from 'react'

export default function Ingredient(...data) {
    console.log('After...');
    console.log(data);
    return (
        <div className="card" id={data[0].mealId} onClick={() => { window.location.href = '/ingredient/' + data[0].ingredientName }}>
            <div className="card-image">
                <img className="image" src={data[0].imageUrl} alt="avtar" />
            </div>
            <div className="container">
                <h5><b>{data[0].ingredientName} - {data[0].ingredientQty}</b></h5>
            </div>
        </div>
    )
}
