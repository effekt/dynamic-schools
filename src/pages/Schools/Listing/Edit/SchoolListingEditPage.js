import React from 'reactn';
import SchoolsService from '../../../../services/schools.service';

class SchoolListingEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: "",
            about: "",
            location: "",
            admission: "",
            image: null
        }
    }

    async componentDidMount() {
        if (!this.global.user) {
            this.props.history.push('/');
        }
        const { match: { params } } = this.props;
        try {
            const school = await SchoolsService.getSchool(params.id);
            if (school.data.success) {
                this.setState(school.data.data);
            } else {
                this.props.history.push('/');
            }
        } catch(err) {
            this.props.history.push('/');
        }
        this.updateName = this.updateName.bind(this);
        this.updateAbout = this.updateAbout.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.updateAdmission = this.updateAdmission.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.performEdit = this.performEdit.bind(this);
    }

    performEdit = async (evt) => {
        evt.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
          formData.append(key, this.state[key]);
        });
        formData.append('educator_id', this.global.user.id);
        const result = await SchoolsService.editSchool(formData);
        if (result.data.success) {
            this.props.history.push('/');
        }
    }

    updateName = (evt) => {
        this.setState({name: evt.target.value});
    }

    updateAbout = (evt) => {
        this.setState({about: evt.target.value});
    }

    updateLocation = (evt) => {
        this.setState({location: evt.target.value});
    }

    updateAdmission = (evt) => {
        this.setState({admission: evt.target.value});
    }

    updateImage = (evt) => {
        const updatedImage = evt.target.value.split('.');
        if (['jpeg', 'jpg', 'gif', 'png'].includes(updatedImage[updatedImage.length - 1].toLowerCase())) {
          this.setState({image: evt.target.files[0]});
        }
    }

    render() {
        return(
            <div className="page-content mt-30">
                <form className="form-content" onSubmit={this.performEdit}>
                    <h1>Edit School</h1>
                    <div className="form-group">
                        <label htmlFor="image">Image (gif, jpeg, jpg, png):</label>
                        <br />
                        <input type="file" accept="image/x-png,image/gif,image/jpeg" className="form-control" name="image" onChange={this.updateImage} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" className="form-control" name="name" required value={this.state.name} onChange={this.updateName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About:</label>
                        <br />
                        <textarea className="form-control h-initial" rows="5" name="about" required value={this.state.about}  onChange={this.updateAbout} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <br />
                        <textarea className="form-control h-initial" rows="5" name="location" required value={this.state.location}  onChange={this.updateLocation} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="admission">Admission:</label>
                        <br />
                        <textarea className="form-control h-initial" rows="5" name="admission" required value={this.state.admission}  onChange={this.updateAdmission} />
                    </div>
                    <input type="submit" className="btn-blue center" />
                </form>
            </div>
        );
    }
}

export default SchoolListingEditPage;