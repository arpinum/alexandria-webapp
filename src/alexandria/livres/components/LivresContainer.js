import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {chargeLivres as charge} from '../actions/chargementActions';
import Livres from './Livres';
import _ from 'lodash';

const mapStateToProps = ({livres: {status, parId: livres}}) => ({
  status,
  livres: _.values(livres),
});

const mapDispatchToProps = (dispatch) =>bindActionCreators({charge}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Livres);
