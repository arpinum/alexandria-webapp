import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Exemplaires from './Exemplaires';
import {rechercheExemplaires as recherche} from '../../../alexandria/exemplaires/actions/rechercheExemplaireActions';
import _ from 'lodash';

const mapStateToProps = (state, {match: {params: {isbn}}}) => {
  const livre = _.get(state, ['alexandria', 'livres', 'parId', isbn]);
  return {livre};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({recherche}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Exemplaires);
