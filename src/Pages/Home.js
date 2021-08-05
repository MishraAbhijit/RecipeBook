import React from 'react'
import HomeBody from '../Components/HomeBody'
import SearchContainer from '../Components/SearchContainer'

let data1 = {
    headerName: "Latest Meals",
    data: [
        {
            mealId: "52795",
            mealName: "Chicken Handi",
            imageUrl: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
            url: '/recipe/52795'
        }, {
            mealId: "52865",
            mealName: "Matar Paneer",
            imageUrl: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
            url: '/recipe/52865'
        }, {
            mealId: "52805",
            mealName: "Lamb Biryani",
            imageUrl: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
            url: '/recipe/52805'
        }, {
            mealId: "52809",
            mealName: "Recheado Masala Fish",
            imageUrl: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
            url: '/recipe/52809'
        }
    ],
    linkPath: '/meals',
    singlePath: '/recipe/'
}

let data2 = {
    headerName: "Popular Meals",
    data: [
        {
            mealId: "52946",
            mealName: "Kung Po Prawns",
            imageUrl: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
            url: '/recipe/52946'
        }, {
            mealId: "52806",
            mealName: "Tandoori chicken",
            imageUrl: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
            url: '/recipe/52806'
        }, {
            mealId: "52833",
            mealName: "Salted Caramel Cheescake",
            imageUrl: "https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg",
            url: '/recipe/52833'
        }, {
            mealId: "52867",
            mealName: "Vegetarian Chilli",
            imageUrl: "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
            url: '/recipe/52867'
        }
    ],
    linkPath: '/meals',
    singlePath: '/recipe/'
}

let data3 = {
    headerName: "Popular Categories",
    data: [
        {
            mealId: "3",
            mealName: "Dessert",
            imageUrl: "https://www.themealdb.com/images/category/dessert.png",
            url: '/category/Dessert'
        }, {
            mealId: "11",
            mealName: "Vegan",
            imageUrl: "https://www.themealdb.com/images/category/vegan.png",
            url: '/category/Vegan'
        }, {
            mealId: "8",
            mealName: "Seafood",
            imageUrl: "https://www.themealdb.com/images/category/seafood.png",
            url: '/category/Seafood'
        }, {
            mealId: "2",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/category/chicken.png",
            url: '/category/Chicken'
        }
    ],
    linkPath: '/categories',
    singlePath: '/category/'
}

let data4 = {
    headerName: "Popular Ingredients",
    data: [
        {
            mealId: "227",
            mealName: "Onions",
            imageUrl: "https://www.themealdb.com/images/ingredients/Onions.png",
            url: '/ingredient/Onions'
        }, {
            mealId: "65",
            mealName: "Chicken",
            imageUrl: "https://www.themealdb.com/images/ingredients/chicken.png",
            url: '/ingredient/Chicken'
        }, {
            mealId: "253",
            mealName: "Potatoes",
            imageUrl: "https://www.themealdb.com/images/ingredients/Potatoes.png",
            url: '/ingredient/Potatoes'
        }, {
            mealId: "400",
            mealName: "Oil",
            imageUrl: "https://www.themealdb.com/images/ingredients/oil.png",
            url: '/ingredient/Oil'
        }
    ],
    linkPath: '/ingredients',
    singlePath: '/ingredient/'
}
export default function Home() {

    React.useEffect(() => {
        document.title = 'RecipeBook | Home';
    }, []);
    return (
        <React.Fragment>
            <SearchContainer />
            <HomeBody {...data1} />
            <HomeBody {...data2} />
            <HomeBody {...data3} />
            <HomeBody {...data4} />
        </React.Fragment>
    )
}
