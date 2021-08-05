import { Container, CssBaseline, makeStyles, TextField, Typography, Button } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import React from 'react';
import backgroundImg from '../bg.jpg';
import './SearchContainer.css';

const useStyles = makeStyles((theme) => ({
    paragraph: {
        color: "white"
    },
    textbox: {

    }
}));

export default function SearchContainer() {
    const classes = useStyles();
    return (
        <div style={{ background: 'white' }}>
            <div className="section-background">
                <section className="section-center">
                    <h1 style={{ color: 'white', fontSize: '3.5rem', margin: '150px 100px auto' }}>Welcome to RecipeBook</h1>
                    <p className={classes.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae modi, adipisci quia inventore
                        reprehenderit magnam corrupti blanditiis </p>
                    <a className="search-btn" href="/recipes" style={{ textDecoration: 'none' }}>Explore</a>
                </section>
            </div>
        </div>
    )
}
