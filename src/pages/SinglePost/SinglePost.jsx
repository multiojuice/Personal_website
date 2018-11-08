import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  PageWrapper,
  ContentWrapper,
  HeaderWrapper,
  HeaderTitle,
  HeaderAuthor,
  TitleWrapper,
  ColorFiller
} from './StyledComponents';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    console.warn(props)

    const data = props.data.find((element) => element.id === props.match.params.id);
    
    this.state = {
      data,
      hasError: false
    }
  }

  render() {
    const { content, title } = this.state.data;
    console.warn(content)
    return (
      <PageWrapper>
        <HeaderWrapper>
          <TitleWrapper>
            <h1>
              {title}
            </h1>
            <h3>
              Owen Sullivan
            </h3>
          </TitleWrapper>
        </HeaderWrapper>
        <ContentWrapper>
          <ReactMarkdown source={content} />
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

export default SinglePost;