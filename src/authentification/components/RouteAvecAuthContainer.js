import RouteAvecAuth from './RouteAvecAuth';
import {connect} from 'react-redux';

const mapStateToProps = ({app: {lecteur}}) => (
  {
    authentifie: lecteur !==undefined,
  }
);

export default connect(mapStateToProps, ()=>({}))(RouteAvecAuth);
