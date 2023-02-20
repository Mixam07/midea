import { connect } from 'react-redux/es/exports';
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import Good from './Good';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};
  
const mapStateToProps = (state) => {
    return{
    }
}
  
export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(Good);