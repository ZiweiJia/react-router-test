import React, {Component} from 'react';

import { Link, Route } from 'react-router-dom';

import ProductDetails from './ProductDetail';

class Products extends Component {
    state = {
        products: [
            {
                "id": 0,
                "name": "Nike Sneakers",
                "description": "Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.",
                "status": "in stock"
            },
            {
                "id": 1,
                "name": "Puma Flip Flops and Slippers",
                "description": "viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.",
                "status": "out of stock"
            },
            {
                "id": 2,
                "name": "Adidas Running Shoes",
                "description": "elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse",
                "status": "out of stock"
            },
            {
                "id": 3,
                "name": "The North Face Boots",
                "description": "metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui,",
                "status": "in stock"
            },
            {
                "id": 4,
                "name": "Under Armour Running Shoes",
                "description": "ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas",
                "status": "out of stock"
            },
            {
                "id": 5,
                "name": "Brooks Sports Shoes",
                "description": "nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                "status": "out of stock"
            },
        ]
    };

    render() {
        const { match } = this.props;
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.products.map(
                            (item, index) => {
                                return <li key={index}
                                           className="list-group-item">
                                    <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                                </li>
                            }
                        )
                    }
                </ul>

                {/*<div>*/}
                {/*    <Route*/}
                {/*        path={`${match.url}/:id`}*/}
                {/*        component={ProductDetails}/>*/}
                {/*</div>*/}

                <div>
                    <Route
                        path={`${match.url}/:productId`}
                        render={(props) => (<ProductDetails {...props} data={this.state.products}/>)}
                    />

                </div>
            </div>

        );
    }
}

export default Products;