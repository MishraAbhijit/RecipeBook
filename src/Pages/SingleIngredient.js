import React from 'react'
import { useParams } from 'react-router-dom';
import ComponentBody from '../Components/ComponentBody';

const uri = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
export default function SingleIngredient() {
    const { ingredientName } = useParams();
    console.log('Ingredient name... ' + ingredientName);

    const [data, setData] = React.useState({ dataSet: [null], name: 'Recipes' });
    const [loading, setLoading] = React.useState(true);

    async function getRecipe() {
        document.title = 'RecipeBook | Ingredient | ' + ingredientName;
        try {
            let newArr = [];
            let response = await fetch(uri + ingredientName);
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
                console.log("New Array....");
                console.log(newArr);
                setData({ ...data, dataSet: newArr, name: 'Recipes : ' + ingredientName });
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
            <ComponentBody {...data} />
        </div>
    )
}
