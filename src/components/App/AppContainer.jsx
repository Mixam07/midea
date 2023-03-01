import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getGoods } from '../../redux/reducers/goods-reducer';
import App from './App';

const AppAPI = (props) => {
    useEffect(() => {
        props.getGoods();
    }, []);

    return <App {...props} />
}

const mapStateToProps = (state) => ({
    typePopup: state.popupReducer.typePopup
})

export default compose(
    connect(mapStateToProps, { getGoods }),
)(AppAPI);