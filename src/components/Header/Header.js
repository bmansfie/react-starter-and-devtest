/**
 * @author Brandon Mansfield
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.banner}>
          <h4 className={s.bannerTitle}>devtest demo</h4>
        </div>
      </div>
    </div>
  );
}
/* <Link className={s.brand} to="/">
 <img src={logoUrl} width="38" height="38" alt="React" />
 <span className={s.brandTxt}>Your Company</span>
 </Link>
 <Navigation className={s.nav} />

 <p className={s.bannerDesc}>Complex web apps made easy</p>
  */

export default withStyles(s)(Header);
