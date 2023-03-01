import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNumberGoodInBasket } from '../../redux/reducers/goods-selector';
import { setTypePopup } from '../../redux/reducers/popup-reducer';
import Header from './Header';

const mapStateToProps = (state) => ({
    typePopup: state.popupReducer.typePopup,
    number: getNumberGoodInBasket(state)
})

export default compose(
    connect(mapStateToProps, { setTypePopup }),
)(Header);