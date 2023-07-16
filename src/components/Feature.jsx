import React from 'react'
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles"
import bgImg from "../image/trees.jpg"

const useStyles = makeStyles({
    title: {
        fontSize: "5rem",
        color: "#fff"
    },
    cover: {
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
       
    },
    textWhite: {
        color: "#fff"
    }
})

function Feature() {

    //create style classes
    const classes = useStyles();

  return (
   <Card className={classes.cover}>
    <CardContent className={classes.textContainer}>
    <Typography className={classes.title}>
        Blog with the best.
    </Typography>
    <Typography className={classes.textWhite}>
        More bloggers and independent creators choose this site than any other blogging site. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.
    </Typography>
    </CardContent>

    <CardActions>
        <Button variant='text' className={classes.btn}>
            Read More
        </Button>
    </CardActions>

   </Card>
  )
}

export default Feature