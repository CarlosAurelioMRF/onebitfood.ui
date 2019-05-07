import '../../styles/categories.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Box } from 'rbx';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';

import { loadRestaurants } from '../../actions/restaurant';
import api from '../../services/api';
import slickSettings from './slick_settings';

class Categories extends Component {
  state = {
    categories: []
  }

  filterByCategory = (category) => {
    this.props.loadRestaurants(category)
  }

  componentWillMount() {
    api.loadCategories().then(response => {
      this.setState(() => ({ categories: response.data.categories }))
    });
  }

  render() {
    return (
      <Fragment>
        <h3 className="title is-size-4">Categorias</h3>
        <Box>
          <Slider {...slickSettings}>
            {this.state.categories.map((category, i) => {
              return (
                <a href="#" onClick={() => this.filterByCategory(category)}>
                  <div className="slider-item" key={i}>
                    <img src={category.image_url} alt="new" />
                    <span>{category.title}</span>
                  </div>
                </a>
              )
            })}
          </Slider>
        </Box>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loadRestaurants }, dispatch);

export default connect(null, mapDispatchToProps)(Categories);