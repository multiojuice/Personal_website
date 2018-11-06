import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  PageWrapper
} from './StyledComponents';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    console.warn(props)

    const content = props.data.find((element) => element.id === props.match.params.id);
    
    this.state = {
      content,
      hasError: false
    }
  }

  render() {
    const { content } = this.state.content;
    console.warn(content)
    return (
      <PageWrapper>
        <ReactMarkdown source={content} />
      </PageWrapper>
    );
  }
}

export default SinglePost;