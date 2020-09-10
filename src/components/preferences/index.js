import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getPreferences, setPreferences } from '../../store/actions/movies.action';
import { connect } from 'react-redux';
import './preferences.css'
class Preference extends Component {
    state = {
        genreSelected: '',
        languageSelected: ''
    }
    componentDidMount() {
        this.getPreferenceDetails();
    }

    getPreferenceDetails() {
        this.props.getPreferences();
    }

    onSubmit = () => {
        let data = {
            genre: this.state.genreSelected,
            language: this.state.languageSelected
        }
        this.props.setPreferences(data);
        this.props.history.push(`/vote`)
    }
    render() {
        const { genres, languages } = this.props
        return (
            <div className="container preferences">
                <div className="row justify-content-center">
                    <form className="pref-form col-10 col-md-10 col-lg-5 col-xl-5">
                        <div className="d-flex align-items-end justify-content-center mt-3 mb-2">
                            <img className="nav-icon" src={require('../../assets/icons/video-camera.svg')} alt="" />
                            <span className="ml-2 nav-logo logo-text">MovieGram</span>
                        </div>
                        <div className="sub-text">Select your preferences</div>
                        <div className="form-group text-left">
                            <label className="form-field">Select genre</label>
                            <select className="form-control" value={this.state.genreSelected} onChange={(e) => this.setState({ genreSelected: e.target.value })}>
                                <option disabled value="">-Select genre-</option>
                                {
                                    genres.map((genre, i) => <option key={i} value={genre}>{genre}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-group text-left">
                            <label className="form-field">Select Language</label>
                            <select className="form-control" value={this.state.languageSelected} onChange={(e) => this.setState({ languageSelected: e.target.value })}>
                                <option disabled value="">-Select language-</option>
                                {
                                    languages.map((language, i) => <option key={i} value={language}>{language}</option>)
                                }
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary mt-1" onClick={this.onSubmit}>GO</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        genres: state.movieReducer.genres,
        languages: state.movieReducer.languages
    }
}
const mapDispatchToProps = {
    getPreferences,
    setPreferences
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preference));