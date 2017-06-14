import {connect} from 'react-redux';
import ConnexionForm from './ConnexionForm';
import {login} from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  login: (payload) => {
    dispatch(login(payload));
  },
});

const ConnexionFormContainer = connect(mapStateToProps, mapDispatchToProps)(ConnexionForm);

export default ConnexionFormContainer;
