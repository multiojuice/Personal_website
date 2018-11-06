import React, { Component } from 'react';

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
    const { content } = this.state;
    console.warn(content)
    return (
      <PageWrapper>
        Hey
      </PageWrapper>
    );
  }
}

export default SinglePost;