import React from 'react';

import {
  LargeTitle, PageWrapper, LargeContainer, MediumTitle, MediumContainer, WholePage
} from './StyledComponents';

export default () => {
  return (
    <PageWrapper>
      <WholePage />
      <LargeContainer colors={['#206ba4', '#Ebf4fa']}>
        <LargeTitle>Owen Sullivan</LargeTitle>
      </LargeContainer>
      <MediumContainer colors={['#Bbd9ee', '#C0c0c0']}>
        <MediumTitle>Projects</MediumTitle>
      </MediumContainer>
      <MediumContainer colors={['#Bbd9ee', '#C0c0c0']}>
        <MediumTitle>Experience</MediumTitle>
      </MediumContainer>
    </PageWrapper>
  );
}