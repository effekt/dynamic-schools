import React from 'reactn';
import { NavLink } from 'react-router-dom';

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.setGlobal({user: null});
    }

    render() {
        return(
            <div className="page-content mt-30">
                <div className="text-center">
                    Successfully logged out.
                </div>
                <div className="text-center">
                    <NavLink to="/">Return to Listings</NavLink>
                </div>
            </div>
        );
    }
}

export default LogoutPage;
