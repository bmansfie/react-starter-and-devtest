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
import s from './ArticleVideo.css';

function ArticleVideo({ youtubeId, title, caption }) {

  return (
    <div className={s.video}>
      <iframe title="Youtube player" width="360" height="200" src={'https://www.youtube.com/embed/' + youtubeId} frameborder="0" allowfullscreen>
      </iframe>
      <div className={s.title}>
        {title}
      </div>
      <div className={s.caption}>
        {caption}
      </div>
      <hr />
    </div>
  );
}

ArticleVideo.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default withStyles(s)(ArticleVideo);
