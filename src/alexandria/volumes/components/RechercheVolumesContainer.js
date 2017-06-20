import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RechercheVolumes from './RechercheVolumes';
import {rechercheVolume as recherche} from '../actions/rechercheVolumesActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({recherche}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RechercheVolumes);
