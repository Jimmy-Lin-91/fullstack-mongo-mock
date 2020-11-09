import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className = 'product-viewer'>
       <div><h2>{this.props.photos.item}</h2></div>
       <img src={this.props.photos.image}/>
      </div>
    )
  }
}