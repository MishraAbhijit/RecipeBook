import React from 'react'
import Ingredient from './Ingredient';

export default function Recipe({ ...data }) {
    console.log("Single Recipe... ");
    console.log(data);

    const { strMeal: name, strCategory: category, strArea: area, strInstructions: instructions, strMealThumb: image,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
        strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19,
        strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 } = data;


    //console.log("Meal Name... " + name);

    const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
        strIngredient10];
    const measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10];
    const measurements = [
        [strIngredient1, strMeasure1],
        [strIngredient2, strMeasure2],
        [strIngredient3, strMeasure3],
        [strIngredient4, strMeasure4],
        [strIngredient5, strMeasure5],
        [strIngredient6, strMeasure6],
        [strIngredient7, strMeasure7],
        [strIngredient8, strMeasure8],
        [strIngredient9, strMeasure9],
        [strIngredient10, strMeasure10],
        [strIngredient11, strMeasure11],
        [strIngredient12, strMeasure12],
        [strIngredient13, strMeasure13],
        [strIngredient14, strMeasure14],
        [strIngredient15, strMeasure15],
        [strIngredient16, strMeasure16],
        [strIngredient17, strMeasure17],
        [strIngredient18, strMeasure18],
        [strIngredient19, strMeasure19],
        [strIngredient20, strMeasure20],

    ]

    const newRecipe = { name, category, area, image, instructions, ingredients, measures, measurements };
    const instructionsArr = newRecipe.instructions.split('.');
    const catUrl = '/category/' + newRecipe.category;
    console.log(newRecipe);
    console.log(instructionsArr);
    return (
        <div className="body-section">
            <section className="body-section-content">
                <div className="recipe-container">
                    <img src={newRecipe.image} className="recipe-img" />
                    <h1>{newRecipe.name}</h1>

                    <h3>{newRecipe.area} | <a href={catUrl} className="singleRecipeAnchor">{newRecipe.category}</a></h3>
                    <h4>Ingredients</h4>
                    {/*<ol>
                        {
                            newRecipe.measurements.map((data) => {
                                if (data[0] !== '' || data[0])
                                    return <li key={data[0]}>{data[0]} : {data[1]}</li>;
                            }
                            )
                        }
                    </ol>*/}
                    <div className='ingredient-container'>
                        {
                            newRecipe.measurements.map((data) => {
                                if (data[0] !== null && typeof (data[0]) !== "undefined" && data[0] !== '') {
                                    const data1 = {
                                        imageUrl: 'https://www.themealdb.com/images/ingredients/' + data[0] + '.png',
                                        ingredientName: data[0],
                                        ingredientQty: data[1]
                                    }
                                    console.log('data1.... ');
                                    console.log(data1);
                                    return <Ingredient {...data1} />;
                                }
                            }
                            )
                        }
                    </div>
                    <h4>Instructions</h4>
                    <ol>
                        {
                            instructionsArr.map((data) => {
                                return <li key={instructionsArr.length}>{data}</li>;
                            })
                        }
                    </ol>
                </div>
            </section>
        </div >
    )
}
