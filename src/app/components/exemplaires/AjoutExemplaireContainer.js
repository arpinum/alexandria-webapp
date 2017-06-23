import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AjoutExemplaire from './AjoutExemplaire';
import {ajouteExemplaire as ajoute} from '../../../alexandria/exemplaires/actions/ajoutExemplaireActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({ajoute}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AjoutExemplaire);
