import React from 'react';

import ProjectDataArr from '../../content/projects';
import {
  PageWrapper,
  PhotoDiv,
  PostWrapper,
  TextDiv
} from './StyledComponents';

export default () => {
  console.warn('Hi', ProjectDataArr);
  return (
    <PageWrapper>
      {
        ProjectDataArr.map(project => 
          (<PostWrapper>
            <PhotoDiv />
            <TextDiv>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </TextDiv>
          </PostWrapper>)
        )
      }
    </PageWrapper>
  );
};