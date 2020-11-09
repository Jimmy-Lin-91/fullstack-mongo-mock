import React from 'react';
import axios from 'axios';
class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      clicked: false,
      min_cost: this.props.product.min_cost,
      curr_bid: ' ',
      ends_in: this.props.product.ends_in,
      image: this.props.product.image
    }
    this.changeView = this.changeView.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeView(e) {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  handleInput(e){
    this.setState({
      curr_bid: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    axios.put(`/name/products/${this.props.product._id}`, {
      min_cost: this.props.product.min_cost,
      curr_bid: this.state.curr_bid,
      ends_in: this.props.product.ends_in,
      image: this.props.product.image
    })
      .then(() => {
        this.props.getProducts();
      })
      .catch((err) => {
        console.error(err);
      })
  }
  render() {

    if (this.state.clicked) {
      return(
        <div>
          <div>
            <button onClick={this.changeView}><h3>{this.props.product.item}</h3></button>
          </div>
            <div><img src={this.props.product.image}/>
            <form onSubmit={this.handleSubmit}>
            <input name="curr_bid" value={this.state.curr_bid} onChange={this.handleInput}/>
            <button type="submit">Bid</button>
            </form>
            <ul>
              <li>Buy: ${this.props.product.min_cost}</li>
              <li>Current Bid: ${this.props.product.curr_bid}</li>
              <li>CountDown: {this.props.product.ends_in} minute(s)</li>
            </ul>
          </div>
        </div>
      )
    } else {
      return(
        <div className='product-list-entry'>
            <div><button onClick={this.changeView}><h3>{this.props.product.item}</h3></button></div>
              <div><img src={this.props.product.image} />
              </div>
            <div>
          </div>
        </div>
      )
    }
  }
}

export default Products