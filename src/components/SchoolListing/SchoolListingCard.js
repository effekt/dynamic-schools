import React from 'react';
import { NavLink } from 'react-router-dom';
import SchoolsService from '../../services/schools.service';
import './SchoolListingCard.css';

class SchoolListingCard extends React.Component {
    render() {
        return(
            <div className="school-listing-container flex-basis-25 mt-15">
                <div className="school-listing">
                    <NavLink to={`/listing/${this.props.id}`} exact activeClassName="active">
                        <div className="school-listing-image">
                            <img src={`${SchoolsService.schoolsImageURI}${this.props.image}`} alt="School"></img>
                        </div>
                        <div className="school-listing-name">{this.props.name}</div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default SchoolListingCard;
