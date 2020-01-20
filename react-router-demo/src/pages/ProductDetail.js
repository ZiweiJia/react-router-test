import React, {Component} from 'react';

class ProductDetail extends Component {
    render() {
        const { productId } = this.props.match.params;
        const { data } = this.props;
        const product = data.filter((item) => item.id === +productId)[0];

        console.log(product)
        if(product){
            return(
            <div className="card" style={{"width": "20rem", "margin": "10px auto"}}>
                <div className="card-body">
                    <h5 className="card-title">{ product.name }</h5>
                    <p className="card-text">{ product.description }</p>
                    <p className="card-text">{product.status }</p>
                </div>
            </div>
        );}else {
            return <h2>the products does not exist</h2>
        }
    }
}

export default ProductDetail;