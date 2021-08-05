import React from 'react'
import { useParams } from 'react-router-dom';
import ComponentBody from '../Components/ComponentBody';

const uri = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

export default function SingleCategory() {
    const { categoryName } = useParams();
    console.log('category name... ' + categoryName);

    const [data, setData] = React.useState({ dataSet: [null], name: 'Recipes' });
    const [loading, setLoading] = React.useState(true);

    async function getRecipe() {
        document.title = 'RecipeBook | Recipes';
        try {
            let newArr = [];
            let response = await fetch(uri + categoryName);
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
                setData({ ...data, dataSet: newArr, name: 'Recipes : ' + categoryName });
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
