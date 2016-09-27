/**
 * @author Brandon Mansfield
 */

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import ArticleLayout from '../../components/ArticleLayout';
//import TitleWithSub from '../../components/TitleWithSub';
//import BigImageWithSmallList from '../../components/BigImageWithSmallList';
//import ArticleContent from '../../components/ArticleContent';
//import ArticleVideo from '../../components/ArticleVideo';
import MasonryTile from '../../components/MasonryTile';
import LoadMoreButton from '../../components/LoadMoreButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from './Masonry.css';
import loremIpsum from 'lorem-ipsum';
var masonryData = require('./masonry-data.json');

// this is our data input point for this template, just for ease.
// plugging in a backend isn't part of the assignment.

function randomImage() {
  var num = parseInt(Math.random()*100%14+1);
  switch (num) {
    case 1:
      return "/images/photo01.jpg";
    case 2:
      return "/images/photo02.jpg";
    case 3:
      return "/images/photo03.jpg";
    case 4:
      return "/images/photo04.jpg";
    case 5:
      return "/images/photo05.jpg";
    case 6:
      return "/images/photo06.jpg";
    case 7:
      return "/images/photo07.jpg";
    case 8:
      return "/images/photo08.jpg";
    case 9:
      return "/images/photo09.jpg";
    case 10:
      return "/images/photo10.jpg";
    default:
      return null;
  }
}

function genP() {
  return loremIpsum({
    count: Math.random()*7,
    units: 'sentences',
  });
}

function genTile() {
  return <MasonryTile
    image={randomImage()}
    heading={loremIpsum()}
    content={genP()}
    meta="Donec Ullamcorper." />;
}

class Masonry extends Component {
  static propTypes = {
  //title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      render: 'short'
    };
  };

  clicked() {
    this.setState({render: 'all'});
  }

  render() {
    var tilesCol1 = [];
    var tilesCol2 = [];
    if (this.state.render === 'short') {
      var end = 5;
      var button =
        <div className={s.filler} id={s.filler}>
          <LoadMoreButton label="Load More" parent={this}
                          onClick={this.clickMore}
          />
        </div>;
    } else {
      end = masonryData.tiles.length;
      button = '';
    }
    for (var i = 0; i < end; i++) {
      if (i%2 == 0) {
        var activeCol = tilesCol1;
      } else {
        activeCol = tilesCol2;
      }
      activeCol.push(<MasonryTile
        key={i}
        heading={masonryData.tiles[i].heading}
        content={masonryData.tiles[i].content}
        image={masonryData.tiles[i].image}
        meta={masonryData.tiles[i].meta}
      />);
    }
    console.log('render: ' + this.state.render);
    console.log('end: ' + end);
    return (
      <div className={s.container}>
        <Header />
        <div className={s.container}>
          <div className={s.masonryColumns}>
            <div className={s.masonryBox}>
              {tilesCol1}
            </div>
            <div className={s.masonryBox}>
              {tilesCol2}
            </div>
          </div>
        </div>
        {button}
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Masonry);
