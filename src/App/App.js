import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../Pages/About';
import Categories from '../Pages/Categories';
import Ingredients from '../Pages/Ingredients';
import Recipes from '../Pages/Recipes';
import Meals from '../Pages/Meals';
import SingleRecipe from '../Pages/SingleRecipe';
import SingleCategory from '../Pages/SingleCategory';
import SingleIngredient from '../Pages/SingleIngredient';


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/categories'>
            <Categories />
          </Route>
          <Route exact path='/ingredients'>
            <Ingredients />
          </Route>
          <Route exact path='/recipes'>
            <Recipes />
          </Route>
          <Route exact path='/meals'>
            <Meals />
          </Route>
          <Route exact path='/recipe/:id'>
            <SingleRecipe />
          </Route>
          <Route exact path='/ingredient/:ingredientName'>
            <SingleIngredient />
          </Route>
          <Route exact path='/category/:categoryName'>
            <SingleCategory />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
