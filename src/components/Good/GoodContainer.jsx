import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import { getCard } from '../../redux/reducers/card-reducer';
import { setFavourite } from '../../redux/reducers/goods-reducer';
import Good from './Good';

const GoodAPI = (props) => {
    useEffect(() => {
        props.getCard(props.params.goodId);
    }, []);
    return <Good {...props} />
}

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
        card: state.cardReducer.card
    }
}
  
export default compose(
    connect(mapStateToProps, { getCard, setFavourite } ),
    withRouter
)(GoodAPI);