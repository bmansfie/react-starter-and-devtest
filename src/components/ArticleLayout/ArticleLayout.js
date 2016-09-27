/**
 * @author Brandon Mansfield
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ArticleLayout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

function ArticleLayout({ children }) {
  return (
    <div>
      <Header />
      {React.Children.only(children)}
      <Footer />
    </div>
  );
}
//
//<Feedback />
//<Footer />

ArticleLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(ArticleLayout);
