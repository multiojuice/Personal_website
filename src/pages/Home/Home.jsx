import React from 'react';

import {
  PageWrapper,
  MediumTitle,
  MediumContainer,
  WholePage,
  WholePageTitle
} from './StyledComponents';

export default () => {
  return (
    <PageWrapper clear>
      <WholePage>
        <WholePageTitle>Owen Sullivan</WholePageTitle>
      </WholePage>
      <PageWrapper ehh>
        <MediumContainer colors={['#Bbd9ee', '#C0c0c0']}>
          <MediumTitle>Projects</MediumTitle>
        </MediumContainer>
        <MediumContainer colors={['#Bbd9ee', '#C0c0c0']}>
          <MediumTitle>Experience</MediumTitle>
        </MediumContainer>
        <MediumContainer colors={['#Bbd9ee', '#C0c0c0']}>
          <MediumTitle>Me</MediumTitle>
        </MediumContainer>
        <MediumContainer colors={['#Bbd9ee', '#C0c0c0']}>
          <MediumTitle>Day to Day</MediumTitle>
        </MediumContainer>
      </PageWrapper>
    </PageWrapper>
  );
}