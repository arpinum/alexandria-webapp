import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Exemplaires from './Exemplaires';
import {rechercheExemplaires as recherche} from '../../../alexandria/exemplaires/actions/rechercheExemplaireActions';
import {sortExemplaire as sort, rendExemplaire as rend} from '../../../alexandria/emprunts/actions/sortiExemplairesActions';
import _ from 'lodash';

const mapStateToProps = (state, {match: {params: {isbn}}}) => {
  const livre = _.get(state, ['alexandria', 'livres', 'parId', isbn]);
  const tousLesExemplaires = _.values(_.get(state, ['alexandria', 'exemplaires', 'parId']));
  const exemplaires = _.filter(tousLesExemplaires, {isbn});
  return {livre, exemplaires};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({recherche, sort,rend}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Exemplaires);
