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
