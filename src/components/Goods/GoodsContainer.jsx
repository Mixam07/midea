import { connect } from 'react-redux';
import { compose } from 'redux';
import { getGoods, setActive } from '../../redux/reducers/goods-reducer';
import { getAvailability, getHot } from '../../redux/reducers/goods-selector';
import Goods from './Goods';

const mapStateToProps = (state) => ({
    goods: state.goodsReducer.goods,
    goodsAvailability: getAvailability(state),
    goodsHot: getHot(state),
    active: state.goodsReducer.active
})

export default compose(
    connect(mapStateToProps, { getGoods, setActive }),
)(Goods);