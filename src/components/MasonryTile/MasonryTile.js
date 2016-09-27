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
import s from './MasonryTile.css';

function MasonryTile({ image, title, content, tail }) {
  if (image)
    var myImage = <img className={s.image} src={image} />
  else
    myImage = <img className={s.noImage} src='/purpleBar.png' />

  return (
    <div className={s.container}>
      {myImage}
      <div className={s.title}>
        {title}
      </div>
        <div className={s.content}>
          {content}
        </div>
      <div className={s.tail}>
        {tail}
      </div>
    </div>
  );
}

MasonryTile.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tail: PropTypes.string.isRequired,
};

export default withStyles(s)(MasonryTile);
