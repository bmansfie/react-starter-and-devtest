/**
 * @author Brandon Mansfield
 */

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TitleWithHR from '../../components/TitleWithHR';
import MasonryTile from '../../components/MasonryTile';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from './TileGroups.css';
import loremIpsum from 'lorem-ipsum';

// this is our data input point for this template, just for ease.
// plugging in a backend isn't part of the assignment.

function randomImage() {
  var num = parseInt(Math.random()*100%10+1);
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
    meta={loremIpsum({ count: 2, units: 'words', })}
  />;
}

class TileGroups extends Component {
  static propTypes = {
  //title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  clicked() {
  }

  render() {
    return (
      <div className={s.container}>
        <Header />
        <div className={s.flexCol}>
          <TitleWithHR
            title="In your area"
            hrColor="red" />
          <div className={s.flexRow}>
            {genTile()}
            {genTile()}
            {genTile()}
          </div>
          <TitleWithHR
            title="News"
            hrColor="blue" />
          <div className={s.flexRow}>
            {genTile()}
            {genTile()}
            {genTile()}
          </div>
          <TitleWithHR
            title="Inspirational"
            hrColor="green" />
          <div className={s.flexRow}>
            {genTile()}
            {genTile()}
            {genTile()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

/*
youtubeId={videoTileData.youtubeId}
name={videoTileData.name}
heading={videoTileData.heading}
caption={videoTileData.caption}
/>
 */

export default withStyles(s)(TileGroups);
