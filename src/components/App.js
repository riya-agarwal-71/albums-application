import { InputAdornment, TextField } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/album";
import Album from "./Album";
import { fetchItems } from "../actions/item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  componentDidMount = () => {
    this.props.dispatch(fetchAlbums());
    this.props.dispatch(fetchItems());
  };

  handleSearchTyping = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          hiddenLabel
          placeholder='Type to seach ...'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <ArrowForwardIos />
              </InputAdornment>
            ),
          }}
          value={this.state.search}
          onChange={this.handleSearchTyping}
          fullWidth
          size='small'
          variant='filled'
        />
        {this.props.album.data != null &&
          this.props.album.data.map((alb) => {
            return (
              <div key={alb.id}>
                <Album alb={alb} search={this.state.search} />
              </div>
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    album: state.album,
    item: state.item,
  };
}

export default connect(mapStateToProps)(App);
