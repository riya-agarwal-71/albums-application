import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 200 + 50),
    };
  }

  render() {
    return (
      <div>
        <Card style={{ display: "flex", height: "50px", padding: "0" }}>
          <Box sx={{ display: "flex", flexDirection: "row", width: "95%" }}>
            <div>
              <CardMedia
                height='50px'
                component='img'
                image={this.props.itm.thumbnailUrl}
              />
            </div>
            <div style={{ width: "100%" }}>
              <CardContent style={{ padding: "5px 0 1px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography component='div' variant='body1'>
                      {this.props.itm.title}
                    </Typography>
                  </div>
                  {this.state.number < 75 ? (
                    <div style={{ color: "red" }}>$ {this.state.number}</div>
                  ) : (
                    <div style={{ color: "green" }}>$ {this.state.number}</div>
                  )}
                </div>
                <Typography component='div' variant='subtitle2'>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <a href={this.props.itm.url} style={{ color: "gray" }}>
                      {this.props.itm.url}
                    </a>
                    <div style={{ color: "gray" }}> 10:00 AM</div>
                  </div>
                </Typography>
              </CardContent>
            </div>
          </Box>
        </Card>
        <div style={{ margin: "1rem" }}></div>
      </div>
    );
  }
}

export default Item;
