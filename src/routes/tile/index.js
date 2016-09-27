/**
 * @author Brandon Mansfield
 */

import React from 'react';
import Tile from './Tile';

const title = 'Tile';

export default {

  path: '/tile',

  action() {
    return {
      title,
      component: <Tile title={title} />,
    };
  },

};
