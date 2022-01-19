import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = () => {
    if (this.props.item.data != null) {
      let items = this.props.item.data
        .filter((x) => x.albumId === this.props.alb.id)
        .slice(0, 10)
        .filter((x) => x.title.includes(this.props.search));
      this.setState({
        items: items,
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.items.length !==
      this.props.item.data
        .filter((x) => x.albumId === this.props.alb.id)
        .slice(0, 10)
        .filter((x) => x.title.includes(this.props.search)).length
    ) {
      if (this.props.item.data != null) {
        let items = this.props.item.data
          .filter((x) => x.albumId === this.props.alb.id)
          .slice(0, 10)
          .filter((x) => x.title.includes(this.props.search));
        this.setState({
          items: items,
        });
      }
    }
  };

  render() {
    if (this.state.items.length === 0) {
      return <div></div>;
    }
    return (
      <div>
        <div style={{ margin: "3rem" }}></div>
        <h2>{this.props.alb.title}</h2>
        {this.props.item.data != null &&
          this.state.items.map((i) => {
            return (
              <div key={i.id}>
                <Item itm={i} />
              </div>
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item,
  };
}

export default connect(mapStateToProps)(Album);
