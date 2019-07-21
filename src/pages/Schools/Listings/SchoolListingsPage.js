import React from 'react';
import SchoolsService from '../../../services/schools.service';
import SchoolListingsBanner from '../../../components/SchoolListingsBanner/SchoolListingsBanner';
import SchoolListingCard from '../../../components/SchoolListing/SchoolListingCard';

class SchoolListingsPage extends React.Component {
    constructor() {
        super();
        this.state = { schools: [] };
    }

    async componentDidMount() {
        try {
            const schools = await SchoolsService.getSchools();
            if (schools.data.success) {
                this.setState({
                    schools: schools.data.data
                });
            }
        } catch(err) {}
    }

    getSchoolListings() {
        return this.state.schools.map((school, index) => <SchoolListingCard key={index} {...school} />);
    }

    render() {
        return(
            <div className="page-content mt-30">
                <SchoolListingsBanner />
                <div className="container flex-shrink d-flex flex-wrap mt-30">
                    { this.state.schools.length ? this.getSchoolListings() : null }
                </div>
                { !this.state.schools.length ? <h1 className="text-center">No Schools in your area... Yet.</h1> : null }
            </div>
        );
    }
}

export default SchoolListingsPage;
