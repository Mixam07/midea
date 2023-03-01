import { connect } from 'react-redux';
import { compose } from 'redux';
import { getGoods, resetBuy, setActiveGood, setBuy, setNumber } from '../../redux/reducers/goods-reducer';
import { getCost, getGoodInBasket, getNumberActive } from '../../redux/reducers/goods-selector';
import Basket from './Basket';

const mapStateToProps = (state) => ({
    goods: getGoodInBasket(state),
    cost: getCost(state),
    numberActive: getNumberActive(state)
})

export default compose(
    connect(mapStateToProps, { getGoods, setBuy, setActiveGood, setNumber, resetBuy }),
)(Basket);