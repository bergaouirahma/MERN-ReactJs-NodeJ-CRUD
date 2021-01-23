import React from 'react';
import Filters from './Filters';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';



class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.state = {
            filterText: '',
            inStockOnly: false,
            products: PRODUCTS
        }
    }

    saveProduct(product) {
        console.log(product);
        product.id = new Date().getTime();
        let products = this.state.products;
        products[product.id] = product;
        this.setState((prevState)=> {
            let products = prevState.products;
            products[product.id] = product;
            return {products: products};
        });

    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[productId];
            return {products};
        });
    }

    render() {
        return (
            <div>
                <Filters filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
                         onFilter={this.handleFilter}></Filters>
                <ProductTable products={this.state.products} filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly} onDestroy={this.handleDestroy}></ProductTable>
                <ProductForm onSave={this.saveProduct}></ProductForm>
            </div>
        );
    }
}

export default Products;