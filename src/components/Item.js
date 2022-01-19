import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

class Item extends Component {
  render() {
    return (
      <div>
        <Card style={{ display: "flex", height: "50px", padding: "0" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <div>
              <CardMedia
                height='50px'
                component='img'
                image={this.props.itm.thumbnailUrl}
              />
            </div>
            <div>
              <CardContent style={{ padding: "5px 0 1px 20px" }}>
                <Typography component='div' variant='body1'>
                  {this.props.itm.title}
                </Typography>
                <Typography component='div' variant='subtitle2'>
                  <a href={this.props.itm.url} style={{ color: "gray" }}>
                    {this.props.itm.url}
                  </a>
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
