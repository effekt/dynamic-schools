import React from 'reactn';
import AuthService from '../../services/auth.service';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.performLogin = this.performLogin.bind(this);
    }

    performLogin = async (evt) => {
        evt.preventDefault();
        const result = await AuthService.login(this.state);
        if (result.data.success) {
            this.setGlobal({user: result.data.data});
            this.props.history.push('/');
        }
    }

    updateEmail = (evt) => {
        this.setState({email: evt.target.value});
    }

    updatePassword = (evt) => {
        this.setState({password: evt.target.value});
    }

    render() {
        return(
            <div className="page-content mt-30">
                <form className="form-content" onSubmit={this.performLogin}>
                    <h1>Log in</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="email" className="form-control" name="email" required value={this.state.email} onChange={this.updateEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input type="password" className="form-control" name="password" required value={this.state.password} autoComplete="off" onChange={this.updatePassword} />
                    </div>
                    <input type="submit" className="btn-blue center" />
                </form>
            </div>
        );
    }
}

export default LoginPage;
