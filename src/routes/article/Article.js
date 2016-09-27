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
import ArticleLayout from '../../components/ArticleLayout';
import TitleWithSub from '../../components/TitleWithSub';
import BigImageWithSmallList from '../../components/BigImageWithSmallList';
import ArticleContent from '../../components/ArticleContent';
import ArticleVideo from '../../components/ArticleVideo';
import s from './Article.css';
import loremIpsum from 'lorem-ipsum';

// this is our data input point for this template, just for ease.
// plugging in a backend isn't part of the assignment.

function genP() {
  return loremIpsum({
    count: Math.random()*9,
    units: 'sentences',
  });
}

var articleData = {
  subtitle: "Wilderness areas found around the world.",
  title: "The Wilderness",
  titleList: [
    "This is the first image",
    "This is the second image",
    "This is the third image",
    "This is the fourth image",
  ],
  captionList: [
    "The hidden waters of life.",
    "Beware the ides of march.",
    "Snow for all.",
    "London Bridges.",
  ],
  imgList: [
    "images/photo01.jpg",
    "images/photo02.jpg",
    "images/photo03.jpg",
    "images/photo04.jpg",
  ],
  articleHtml: null,
  youtubeId: 'FMSC7Tg8Yek',
  videoTitle: 'Flight of the Silverbird',
  videoCaption: 'With cinematic of... birds...',
};

function Article(input) {
  articleData.articleHtml =
    <div>
    <p>{genP()}</p>
          <ArticleVideo
            youtubeId={articleData.youtubeId}
            title={articleData.videoTitle}
            caption={articleData.videoCaption}
          />
    <p>{genP()}</p>
    <p>{genP()}</p>
    <p>{genP()}</p>
    <p>{genP()}</p>
    <p>{genP()}</p>
    <h3 className="subheading">{loremIpsum({count: 1, units: 'sentences'})}</h3>
    <p>{genP()}</p>
    <p>{genP()}</p>
    <p>{genP()}</p>
    <p>{genP()}</p>
    <p>{genP()}</p>
  </div>
  return (
    <ArticleLayout>
      <div className={s.root}>
        <div className={s.container}>
          <TitleWithSub subtitle={articleData.subtitle} title={articleData.title} />
          <BigImageWithSmallList
            titleList={articleData.titleList}
            captionList={articleData.captionList}
            imgList={articleData.imgList} />
          <div className="placeVideo">
          <ArticleContent
            content={articleData.articleHtml} />
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

Article.propTypes = {
  //title: PropTypes.string.isRequired,
};

export default withStyles(s)(Article);
