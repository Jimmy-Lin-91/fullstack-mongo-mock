import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import Products from './Products';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      searched: ' ',
      randoProd: ' ',
      page: 'home',
    }
  this.getProducts = this.getProducts.bind(this);

  this.handleSearch = this.handleSearch.bind(this);
  this.handleSearchView = this.handleSearchView.bind(this);
  }
  componentDidMount(){
    this.getProducts();
  }

  getProducts() {
    axios.get('/name/products', {
      params: {
        _limit: 10
      }
    })
    .then((results) => {
      var random = Math.floor(Math.random()*this.state.products.length);
      this.setState({
          products: results.data,
          randoProd: results.data[Math.floor(Math.random() * results.data.length)]
        })
      })
  }
  handleSearch(e){
    e.preventDefault();
    this.setState({
      searched: e.target.value
    })
    this.getProducts();
  }
  handleSearchView(e) {
    this.setState({
      page: e.target.name
    })
  }
  render(){
    if (this.state.page === 'search') {
      return(
        <div>
          <h1>Here You Go!</h1>
            <div className="row main-container">
              <div className="col-md-7 product-viewer-container">
                <ProductViewer photos={this.state.searched}/>
              </div>
            </div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search handleSearchView={this.handleSearchView} handleSearch={this.handleSearch}/>
            </div>
          </nav>

          <div className="col-md-5 product-list-container">
            <ProductList  products={this.state.products.filter(product => product.item.includes(this.state.search))} getProducts={this.getProducts}/>
          </div>
        </div>
      )
    } else if (this.state.page === "home" ) {

      return(
        <div>
          <div>
            <h1>EBID Not Just Say That!</h1>
            <h3>My Trash, Your Treasure...Pleb</h3>
          </div>

          <div className="row main-container">
            <div className="col-md-7 product-viewer-container">
              <h2>Featured Item This Week!</h2>
              <ProductViewer photos={this.state.randoProd}/>
            </div>
          </div>


          <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchView={this.handleSearchView} handleSearch={this.handleSearch}/>
          </div>
          </nav>

          <div className="col-md-5 product-list-container">
            <ProductList  products={this.state.products} getProducts={this.getProducts}/>
          </div>

        </div>
      )
     }
    }
}