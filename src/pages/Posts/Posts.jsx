import React from 'react';

import {
  PageWrapper,
  PhotoDiv,
  PostWrapper,
  TextDiv,
  PostPhoto,
  ReadMoreLink
} from './StyledComponents';

export default ({data, type}) => {
  console.warn(data);
  return (
    <PageWrapper>
      {
        data.map((post, index) => 
          (<PostWrapper direction={index % 2 === 0 ? true : false}>
            <PhotoDiv>
              <div>
                <PostPhoto src={post.image}/>
                <h3>{post.extra}</h3>
            </div>
            </PhotoDiv>
            <TextDiv>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <ReadMoreLink href={`/${type}/${post.id}`}>Read more</ReadMoreLink>
            </TextDiv>
          </PostWrapper>)
        )
      }
    </PageWrapper>
  );
};