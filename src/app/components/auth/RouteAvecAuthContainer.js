import RouteAvecAuth from './RouteAvecAuth';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = ({app: {lecteur}}) => (
  {
    authentifie: lecteur !==undefined,
  }
);

export default withRouter(connect(mapStateToProps, ()=>({}))(RouteAvecAuth));
