import React from 'react'
import ComponentBody from '../Components/ComponentBody'
import HomeBody from '../Components/HomeBody'
import '../CSS/Categories.css'

let data3 = {
    headerName: "Categories",
    data: [
        {
            mealId: "3",
            mealName: "Dessert",
            imageUrl: "https://www.themealdb.com/images/category/dessert.png"
        }, {
            mealId: "11",
            mealName: "Vegan",
            imageUrl: "https://www.themealdb.com/images/category/vegan.png"
        }, {
            mealId: "8",
            mealName: "Seafood",
            imageUrl: "https://www.themealdb.com/images/category/seafood.png"
        }, {
            mealId: "2",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/category/chicken.png"
        }, {
            mealId: "3",
            mealName: "Dessert",
            imageUrl: "https://www.themealdb.com/images/category/dessert.png"
        }, {
            mealId: "11",
            mealName: "Vegan",
            imageUrl: "https://www.themealdb.com/images/category/vegan.png"
        }, {
            mealId: "8",
            mealName: "Seafood",
            imageUrl: "https://www.themealdb.com/images/category/seafood.png"
        }, {
            mealId: "2",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/category/chicken.png"
        }, {
            mealId: "3",
            mealName: "Dessert",
            imageUrl: "https://www.themealdb.com/images/category/dessert.png"
        }, {
            mealId: "11",
            mealName: "Vegan",
            imageUrl: "https://www.themealdb.com/images/category/vegan.png"
        }, {
            mealId: "8",
            mealName: "Seafood",
            imageUrl: "https://www.themealdb.com/images/category/seafood.png"
        }, {
            mealId: "2",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/category/chicken.png"
        }, {
            mealId: "3",
            mealName: "Dessert",
            imageUrl: "https://www.themealdb.com/images/category/dessert.png"
        }, {
            mealId: "11",
            mealName: "Vegan",
            imageUrl: "https://www.themealdb.com/images/category/vegan.png"
        }, {
            mealId: "8",
            mealName: "Seafood",
            imageUrl: "https://www.themealdb.com/images/category/seafood.png"
        }, {
            mealId: "2",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/category/chicken.png"
        }
    ],
    linkPath: '/categories'
}

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

export default function Categories() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function getRecipe() {
            document.title = 'RecipeBook | Categories';
            try {
                const response = await fetch(url);
                const responseData = await response.json();
                console.log("Categories Fetch.....");
                console.log(responseData);
                if (responseData) {
                    let newArr = responseData.categories.map((obj) => {
                        if (obj.strCategory !== 'Beef') {
                            return {
                                id: obj.idCategory,
                                name: obj.strCategory,
                                url: obj.strCategoryThumb,
                                searchUrl: '/category/' + obj.strCategory
                            };
                        }
                    }
                    )
                    console.log('new arr...');
                    console.log(newArr);
                    setData({ dataSet: newArr, name: "categories", uri: 'www.themealdb.com/api/json/v1/1/filter.php?c=' });
                }
                setLoading(false);
            } catch (error) {
                console.log("Categories Fetch Error..... " + error);
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
