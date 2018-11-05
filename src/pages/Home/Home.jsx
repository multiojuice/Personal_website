import React from 'react';

import {
  PageWrapper,
  MediumTitle,
  MediumContainer,
  WholePage,
  WholePageTitle
} from './StyledComponents';
import Tile from './Tile';

import TileData from '../../content/pages';

const getTiles = (navigatePage) => {
  return TileData.map(item =>
    <Tile 
      navigatePage={() => navigatePage(item.route)}
      title={item.title}
    />
    );
}

export default ({history}) => {
  return (
    <PageWrapper clear>
      <WholePage>
        <WholePageTitle>Owen Sullivan</WholePageTitle>
      </WholePage>
      <PageWrapper front>
        {getTiles(history.push)}
      </PageWrapper>
    </PageWrapper>
  );
}