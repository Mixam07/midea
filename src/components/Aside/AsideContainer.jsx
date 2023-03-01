import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCost, getIsGoodInBasket, getNumberActive } from '../../redux/reducers/goods-selector';
import { setTypePopup } from '../../redux/reducers/popup-reducer';
import Aside from './Aside';

const mapStateToProps = (state) => ({
    typePopup: state.popupReducer.typePopup,
    cost: getCost(state),
    numberActive: getNumberActive(state),
    isGoodInBuy: getIsGoodInBasket(state)
})

export default compose(
    connect(mapStateToProps, { setTypePopup }),
)(Aside);