/**
 * @author Brandon Mansfield
 */

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import VideoTile from '../../components/VideoTile';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from './Tile.css';
import loremIpsum from 'lorem-ipsum';

// this is our data input point for this template, just for ease.
// plugging in a backend isn't part of the assignment.

var videoTileData = {
  youtubeId: 'neuEeCgcHuQ',
  name: 'News Release',
  heading: 'Philadelphia Pennsylvania Temple Is Dedicated as Church’s 152nd',
  caption: 'The Philadelphia Pennsylvania Temple was dedicated as the 152nd temple of The Church of Jesus Christ of Latter-day Saints, Sunday, September 18, 2016. It is the first temple in Philadelphia and in the state. President Henry B. Eyring, first Counselor in the First Presidency of the Church dedicated the temple in three sessions on Sunday and presided over the youth cultural celebration the night prior at Temple University. President Erying has a close bond to this particular temple since he was born and lived in New Jersey and was baptized in Philiadelphia as a boy. ',
};

function genP() {
  return loremIpsum({
    count: Math.random()*7,
    units: 'sentences',
  });
}

class Tile extends Component {
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
        <div className={s.container}>
          <VideoTile {...videoTileData} />
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

export default withStyles(s)(Tile);
