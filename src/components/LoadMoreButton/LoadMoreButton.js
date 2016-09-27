/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LoadMoreButton.css';

var myParent = {};

function onClick() {
  myParent.clicked();
}

function LoadMoreButton({ label, parent }) {
  myParent = parent;

  return (
    <div className={s.button} onClick={onClick}>
      {label}
    </div>
  );
}

LoadMoreButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default withStyles(s)(LoadMoreButton);
