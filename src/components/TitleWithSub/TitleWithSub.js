/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TitleWithSub.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

function TitleWithSub({ subtitle, title }) {
  return (
    <div>
      <div className={s.subTitle}>{subtitle}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
}
//
//<Feedback />
//<Footer />

TitleWithSub.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(TitleWithSub);
