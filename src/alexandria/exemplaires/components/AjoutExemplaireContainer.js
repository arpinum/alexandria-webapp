import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AjoutExemplaire from './AjoutExemplaire';
import {rechercheVolume as recherche} from '../../volumes/actions/rechercheVolumesActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({recherche}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AjoutExemplaire);
