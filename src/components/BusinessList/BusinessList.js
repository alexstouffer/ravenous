import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

//businessKey is used to avoid a console error: each child should have its own unique key.
let businessKey = 0;

class BusinessList extends React.Component{
    render(){
        return <div className="BusinessList">
            {
                this.props.businesses.map(business => {
                    businessKey += 1;
                    return <Business business={business} key={businessKey}/>
                })
            }
        </div>
    }
};

export default BusinessList;