import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    height:140,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight:10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{marginLeft:"10px", padding:"10px"}}>
      <CardContent
        style={{
          margin:"0",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2" >
          {props.name}
        </Typography>
        <Typography variant="body1" component="p">
          Total cases: {props.total}
          <br />
          Active cases: {props.active}
          <br />
          Deaths: {props.died}
        </Typography>
      </CardContent>
    </Card>
  );
}
