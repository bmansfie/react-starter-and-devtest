/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BigImageWithSmallList.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

var index = 0;

var gImgList;
var gCaptionList;
var gTitleList;

//<a key={i} href={'#' + imgList[i]} onClick={swap}>
function BigImageWithSmallList({ titleList, captionList, imgList}) {
  gImgList = imgList;
  gCaptionList = captionList;
  gTitleList = titleList;

  function swap(target) {
    if (target.target.src) {
      console.log('src: ' + target.target.src);
      for (var i = 0; i < gImgList.length; i++) {
        if (target.target.src.indexOf(gImgList[i]) >= 0) {
          console.log('found: ' + target.target.src + ' as ' + gTitleList[i]);
          document.getElementById(s.imageTitle).innerHTML = gTitleList[i];
          document.getElementById(s.imageCaption).innerHTML = gCaptionList[i];
        }
      }
      document.getElementById("target").src = target.target.src;
    }
  }

  var thumbs = [];
  for (var i = 0; i < imgList.length; i++) {
    thumbs.push(
      <a key={i} onClick={swap}>
        <img className={s.thumb} src={imgList[i]} />
      </a>
    );
  }
  return (
    <div>
      <img className={s.bigImage} id="target" src={imgList[0]} />
      <div className={s.caption}>
        <div className={s.titleAndCaption}>
          <div className={s.imageTitle} id={s.imageTitle}>{titleList[index]}</div>
          <span className={s.imageCaption} id={s.imageCaption}>{captionList[index]}</span>
        </div>
        <div className={s.thumbnails}>
          {thumbs}
        </div>
      </div>
    </div>
  );
}

BigImageWithSmallList.propTypes = {
  titleList: PropTypes.array.isRequired,
  captionList: PropTypes.array.isRequired,
  imgList: PropTypes.array.isRequired,
};

export default withStyles(s)(BigImageWithSmallList);
