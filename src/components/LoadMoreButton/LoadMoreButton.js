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
    <button className={s.button} onClick={onClick}>
      {label}
    </button>
  );
}

LoadMoreButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default withStyles(s)(LoadMoreButton);
