import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategory } from '../actions/categories';

class Category extends Component{


  constructor(props)
  {
      super(props);
      console.debug(props);

  }

  componentWillMount()
  {
    this.props.showCategory(this.props.match.params.id);
  }


  componentDidUpdate(prevProps) {

    if(this.props.match.params.id!==prevProps.match.params.id)
  {
  this.props.showCategory(this.props.match.params.id);
}
  }


  render()
  {
    return (
          <div>

            <p>
             <ul>

                 {this.props.category && this.props.category.map( (item)=> { return <div><h1>{ item.title && item.title.rendered}</h1>

                       <p><div dangerouslySetInnerHTML={{__html: item.content && item.content.rendered}} /> </p></div>})}

             </ul>
            </p>
          </div>)
  }

}





const mapStateToProps = (state) => {
  return {
    category: state.wordpress.category,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCategory: (id)=>{ dispatch(loadCategory(id));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category)
