/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MasonryTile.css';

function MasonryTile({ image, heading, content, meta }) {
  if (image)
    var myImage = <img className={s.image} src={image} />
  else
    myImage = <img className={s.noImage} src='/purpleBar.png' />

  return (
    <div className={s.container}>
      {myImage}
      <div className={s.title}>
        {heading}
      </div>
        <div className={s.content}>
          {content}
        </div>
      <div className={s.tail}>
        {meta}
      </div>
    </div>
  );
}

MasonryTile.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
};

export default withStyles(s)(MasonryTile);
