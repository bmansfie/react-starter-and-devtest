/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ArticleContent.css';
import ArticleVideo from '../ArticleVideo';

function ArticleContent({ content }) {

  return (
    <div className={s.container}>
      {content}
    </div>
  );
}

ArticleContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default withStyles(s)(ArticleContent);
