import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMenu } from '../actions/menus';
import { Link } from 'react-router-dom';

class Menu extends Component{

  constructor(props)
  {
      super(props);

  }

  componentWillMount()
  {
    this.props.makeMenu();
  }

  render()
  {
    return (
          <div>
              <p>
                <ul>
                 {this.props.menu.items && this.props.menu.items.map( (item)=> { return <li><Link to={"/page/"+ item.object_id}>{item.title}</Link>

                {item.children && <ul>{item.children.map( (child)=>{ return <li><Link to={"/category/"+ child.object_id} >{child.title}</Link></li> })}</ul>  }

                 </li>} )}
                </ul>
              </p>
          </div>)
  }

}


const mapStateToProps = (state) => {
  return {
    menu: state.wordpress.menu,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeMenu: ()=>{ dispatch(loadMenu());}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
