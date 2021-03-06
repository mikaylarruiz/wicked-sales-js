import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(productsArray => this.setState({ products: productsArray }))
      .catch(err => console.error(err));
  }

  render() {
    const productsListArray = this.state.products;
    const setViewProp = this.props.setViewProp;
    return (
      productsListArray.map(product => {
        return (
          <ProductListItem
            key={product.productId}
            productId={product.productId}
            productImage={product.image}
            productName={product.name}
            productPrice={`$${product.price}`}
            productDescription={product.shortDescription}
            setViewProp={setViewProp}
          />
        );
      })
    );
  }
}

export default ProductList;
