/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TitleWithHR.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

function TitleWithHR({ hrColor, title }) {
  return (
    <div>
      <div className={s.title}>{title}</div>
      <hr className={s.titleSeparatorHR + ' ' + s[hrColor]} />
    </div>
  );
}
//
//<Feedback />
//<Footer />

TitleWithHR.propTypes = {
  title: PropTypes.string.isRequired,
  hrColor: PropTypes.string.isRequired,
};

export default withStyles(s)(TitleWithHR);
