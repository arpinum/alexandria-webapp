import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RechercheVolumes from './RechercheVolumes';
import {rechercheVolume as recherche, demarreRecherche as demarre} from '../../../alexandria/volumes/actions/rechercheVolumesActions';

const mapStateToProps = ({alexandria:{volumes:{tous:volumes}}}) => ({
  volumes
});

const mapDispatchToProps = (dispatch) => bindActionCreators({recherche, demarre}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RechercheVolumes);
