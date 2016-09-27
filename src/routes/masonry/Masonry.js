/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import ArticleLayout from '../../components/ArticleLayout';
//import TitleWithSub from '../../components/TitleWithSub';
//import BigImageWithSmallList from '../../components/BigImageWithSmallList';
//import ArticleContent from '../../components/ArticleContent';
//import ArticleVideo from '../../components/ArticleVideo';
import MasonryTile from '../../components/MasonryTile';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from './Masonry.css';
import loremIpsum from 'lorem-ipsum';

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
    title={loremIpsum()}
    content={genP()}
    tail="Donec Ullamcorper." />;
}

var masonryData = {
};

function Masonry(input) {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.container}>
        <div className={s.masonryBox}>
          {genTile()}
          {genTile()}
          {genTile()}
          {genTile()}
          {genTile()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

Masonry.propTypes = {
  //title: PropTypes.string.isRequired,
};

export default withStyles(s)(Masonry);
