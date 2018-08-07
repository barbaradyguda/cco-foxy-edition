import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../actions/posts';

class Post extends Component{

  constructor(props)
  {
      super(props);
      console.debug(props);

  }

  componentWillMount()
  {
    this.props.doSomething(this.props.match.params.id);
  }

  render()
  {
    return (
          <div>

            <p>
              <h1>{ this.props.post.title && this.props.post.title.rendered}</h1>
        {/*      <h2>{ this.props.post.id && this.props.post.id}</h2>    */}
              <p><div dangerouslySetInnerHTML={{__html: this.props.post.content && this.props.post.content.rendered}} /> </p>

            </p>
          </div>)
  }

}







const mapStateToProps = (state) => {
  return {
    post: state.wordpress.post,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doSomething: (id)=>{ dispatch(loadPost(id));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)
