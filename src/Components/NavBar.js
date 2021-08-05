import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: '3'
    },
    title: {
        display: 'flex',
        marginLeft: "30%",
        flexDirection: 'row',
        color: "#000",
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
        fontSize: '30px',
        fontFamily: 'Times New Roman'
    },
    /*link: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },*/

    anchorstyle: {
        textDecoration: 'none',
        color: "#000",
        marginRight: '30px',
        fontFamily: 'Arial',
        paddingTop: '10px',
        paddingBottom: '10px',
        fontSize: '20px'
    }


}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography className={classes.title} variant="h6">
                            <a href='/' style={{ textDecoration: 'none', color: 'black' }}>RecipeBook</a>
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <ul style={{ marginTop: '25px', textAlign: 'center' }}>
                            <li style={{ display: 'inline' }}>
                                <a href='/' className={classes.anchorstyle}>Home</a>
                            </li>
                            <li style={{ display: 'inline' }}>
                                <a href='/recipes' className={classes.anchorstyle}>Recipes</a>
                            </li>
                            <li style={{ display: 'inline' }}>
                                <a href='/categories' className={classes.anchorstyle}>Categories</a>
                            </li>
                            <li style={{ display: 'inline' }}>
                                <a href='/ingredients' className={classes.anchorstyle}>Ingredients</a>
                            </li>
                            <li style={{ display: 'inline' }}>
                                <a href='/about' className={classes.anchorstyle}>About</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
