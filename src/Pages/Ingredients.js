import React from 'react'
import ComponentBody from '../Components/ComponentBody'

let dataSet = {
    headerName: "Ingredients",
    data: [
        {
            mealId: "227",
            mealName: "Onions",
            imageUrl: "https://www.themealdb.com/images/ingredients/Onions.png"
        }, {
            mealId: "65",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/ingredients/chicken.png"
        }, {
            mealId: "253",
            mealName: "Potatoes",
            imageUrl: "https://www.themealdb.com/images/ingredients/Potatoes.png"
        }, {
            mealId: "400",
            mealName: "Oil",
            imageUrl: "https://www.themealdb.com/images/ingredients/oil.png"
        }, {
            mealId: "227",
            mealName: "Onions",
            imageUrl: "https://www.themealdb.com/images/ingredients/Onions.png"
        }, {
            mealId: "65",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/ingredients/chicken.png"
        }, {
            mealId: "253",
            mealName: "Potatoes",
            imageUrl: "https://www.themealdb.com/images/ingredients/Potatoes.png"
        }, {
            mealId: "400",
            mealName: "Oil",
            imageUrl: "https://www.themealdb.com/images/ingredients/oil.png"
        }, {
            mealId: "227",
            mealName: "Onions",
            imageUrl: "https://www.themealdb.com/images/ingredients/Onions.png"
        }, {
            mealId: "65",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/ingredients/chicken.png"
        }, {
            mealId: "253",
            mealName: "Potatoes",
            imageUrl: "https://www.themealdb.com/images/ingredients/Potatoes.png"
        }, {
            mealId: "400",
            mealName: "Oil",
            imageUrl: "https://www.themealdb.com/images/ingredients/oil.png"
        }, {
            mealId: "227",
            mealName: "Onions",
            imageUrl: "https://www.themealdb.com/images/ingredients/Onions.png"
        }, {
            mealId: "65",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/ingredients/chicken.png"
        }, {
            mealId: "253",
            mealName: "Potatoes",
            imageUrl: "https://www.themealdb.com/images/ingredients/Potatoes.png"
        }, {
            mealId: "400",
            mealName: "Oil",
            imageUrl: "https://www.themealdb.com/images/ingredients/oil.png"
        }
    ]
}

const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const uri = 'https://www.themealdb.com/images/ingredients/';
export default function Ingredients() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function getRecipe() {
            document.title = 'RecipeBook | Ingredients';
            try {
                const response = await fetch(url);
                const responseData = await response.json();
                console.log("Ingredients Fetch.....");
                console.log(responseData);
                if (responseData) {
                    let newArr = responseData.meals.map((obj) => {
                        if (!obj.strIngredient.includes('Beef')) {
                            return {
                                id: obj.idIngredient,
                                name: obj.strIngredient,
                                url: uri + obj.strIngredient + '.png',
                                searchUrl: '/ingredient/' + obj.strIngredient
                            };
                        }
                    }
                    )
                    console.log(newArr);
                    setData({ dataSet: newArr, name: "Ingredients" });
                }
                setLoading(false);
            } catch (error) {
                console.log("Ingredients Fetch Error..... " + error);
                setLoading(false);
            }
        }
        getRecipe();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="categories">
            {console.log("Data......... ")}
            {console.log(data)}

            <ComponentBody {...data} />
        </div>
    )
}
