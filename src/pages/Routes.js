import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SchoolListingPage from './Schools/Listing/SchoolListingPage';
import SchoolListingsPage from './Schools/Listings/SchoolListingsPage';
import SchoolListingEditPage from './Schools/Listing/Edit/SchoolListingEditPage';
import SchoolListingsNew from './Schools/New/SchoolNewPage';
import LoginPage from './Login/LoginPage';
import LogoutPage from './Logout/LogoutPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SchoolListingsPage} />
            <Route path="/new" component={SchoolListingsNew} />
            <Route path="/listing/:id" exact component={SchoolListingPage} />
            <Route path="/listing/:id/edit" exact component={SchoolListingEditPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
        </Switch>
    );
}

export default Routes;