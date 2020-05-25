import React from "react";
import CountUp from "react-countup";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const cardInfo = [
    {
      title: "Infected",
      value: confirmed,
    },
    {
      title: "Recovered",
      value: recovered,
    },
    {
      title: "Deaths",
      value: deaths,
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardInfo.map((info, i) => {
          return (
            <Grid
              key={i}
              item
              component={Card}
              xs={12}
              md={3}
              className={styles.card}>
              <CardContent>
                <Typography color="textSecondary" variant="h5" gutterBottom>
                  {info.title}
                </Typography>{" "}
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={info.value.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>{" "}
                <Typography color="textSecondary">
                  {" "}
                  {new Date(lastUpdate).toDateString()}{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  {" "}
                  Number of {info.title.toLowerCase()} cases of COVID - 19
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
