import React from 'react';
import './Business.css';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.Component {
    render() {
        return <div className="Business">
            <div className="image-container">
                <img src={this.imageSrc} alt=''/>
            </div>
            <h2>{this.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                <p>{this.address}</p>
                <p>{this.city}</p>
                <p>{this.city} {this.zipCode}</p>
                </div>
                <div className="Business-reviews">
                <h3>{this.category}</h3>
                <h3 className="rating">{this.rating}</h3>
                <p>{this.reviewCount}</p>
                </div>
            </div>
        </div>
    }
}

export default Business;