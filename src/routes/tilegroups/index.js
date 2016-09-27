/**
 * @author Brandon Mansfield
 */

import React from 'react';
import TileGroups from './TileGroups';

const title = 'TileGroups';

export default {

  path: '/tiles',

  action() {
    return {
      title,
      component: <TileGroups title={title} />,
    };
  },

};
