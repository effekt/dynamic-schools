import React from 'reactn';
import SchoolsService from '../../../services/schools.service';
import './SchoolListingPage.css';
import { NavLink } from 'react-router-dom';

class SchoolListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { school: null };
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        try {
            const school = await SchoolsService.getSchool(params.id);
            if (school.data.success) {
                this.setState({
                    school: school.data.data
                });
            } else {
                this.props.history.push('/');
            }
        } catch(err) {
            this.props.history.push('/');
        }
    }

    render() {
        if (this.state.school) {
            return(
                <div className="page-content">
                    <div className="school-listing-banner">
                        <img src={`${SchoolsService.schoolsImageURI}${this.state.school.image}`} alt={this.props.name} className="school-listing-img" />
                    </div>
                    { this.global.user && this.global.user.id === this.state.school.educator_id ? <NavLink to={`/listing/${this.state.school.id}/edit`} className="school-listing-edit">Edit</NavLink> : null }
                    <div className="mt-30 container item-border-bottom pb-30">
                        <h1 className="text-center school-listing-h1">About</h1>
                        <p>
                            {this.state.school.about}
                        </p>
                    </div>
                    <div className="mt-30 container item-border-bottom pb-30">
                        <h1 className="text-center school-listing-h1">Location</h1>
                        <p>
                            {this.state.school.location}
                        </p>
                    </div>
                    <div className="mt-30 container pb-30">
                        <h1 className="text-center school-listing-h1">Admission</h1>
                        <p>
                            {this.state.school.admission}
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default SchoolListingPage;
