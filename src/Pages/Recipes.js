import React from 'react'
import ComponentBody from '../Components/ComponentBody'
import HomeBody from '../Components/HomeBody'

let data = {
    headerName: "Latest Meals",
    data: [
        {
            mealId: "52795",
            mealName: "Chicken Handi",
            imageUrl: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
        }, {
            mealId: "52865",
            mealName: "Matar Paneer",
            imageUrl: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg"
        }, {
            mealId: "52805",
            mealName: "Lamb Biryani",
            imageUrl: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"
        }, {
            mealId: "52809",
            mealName: "Recheado Masala Fish",
            imageUrl: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg"
        }
    ],
    linkPath: '/meals',
    singlePath: '/recipe/'
}

const uri = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
export default function Recipes() {
    const [data, setData] = React.useState({ dataSet: [null], name: 'Recipes' });
    const [loading, setLoading] = React.useState(true);

    async function getRecipe() {
        document.title = 'RecipeBook | Recipes';
        try {
            let newArr = [];
            let fetched = false;

            let response = await fetch(uri + "Indian");
            let responseData = await response.json();
            console.log("Recipes Fetch.....");
            console.log(responseData);
            if (responseData) {
                let tempArr = responseData.meals.map((obj) => {
                    if (!obj.strMeal.includes('Beef')) {
                        return {
                            id: obj.idMeal,
                            name: obj.strMeal,
                            url: obj.strMealThumb
                        };
                    }
                }
                )
                newArr = [...newArr, ...tempArr];
                fetched = true;
                console.log("New Array....");
                console.log(newArr);
            }

            response = await fetch(uri + "American");
            responseData = await response.json();
            console.log("Recipes Fetch2.....");
            console.log(responseData);
            if (responseData) {
                let tempArr = responseData.meals.map((obj) => {
                    if (!obj.strMeal.includes('Beef')) {
                        return {
                            id: obj.idMeal,
                            name: obj.strMeal,
                            url: obj.strMealThumb
                        };
                    }
                }
                )
                newArr = [...newArr, ...tempArr];
                fetched = true;
                console.log("New Array....");
                console.log(newArr);
            }

            if (fetched) {
                setData({ ...data, dataSet: newArr });
            }
            setLoading(false);
        } catch (error) {
            console.log("Recipes Fetch Error..... " + error);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        getRecipe();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="categories">
            {console.log("Data Recipes Before......... ")}
            {console.log(data)}

            <ComponentBody {...data} />
        </div>
    )
}
