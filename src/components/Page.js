import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPage } from '../actions/pages';
import { Link } from 'react-router-dom';

class Page extends Component{

  constructor(props)
  {
      super(props);

  }

  componentWillMount()
  {
    this.props.makePage(this.props.match.params.id);
    console.debug(this.props.match.params);

  }



  componentDidUpdate(prevProps) {

    if(this.props.match.params.id!==prevProps.match.params.id)
  {
  this.props.makePage(this.props.match.params.id);
}
  }



  render()
  {
    return (
          <div>
            <p>
              <h1>{ this.props.page.title && this.props.page.title.rendered}</h1>

              <p><div dangerouslySetInnerHTML={{__html: this.props.page.content && this.props.page.content.rendered}} /> </p>

            </p>
          </div>)
  }

}


const mapStateToProps = (state) => {
  return {
    page: state.wordpress.page,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makePage: (id)=>{ dispatch(loadPage(id));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page)
