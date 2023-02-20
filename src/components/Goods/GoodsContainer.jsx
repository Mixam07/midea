import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getGoods, setActive, setBuy, setFavourite } from '../../redux/reducers/goods-reducer';
import Goods from './Goods';

const GoodsAPI = (props) => {
    useEffect(() => {
        props.getGoods();
    }, []);

    return <Goods {...props} />
}

const mapStateToProps = (state) => ({
    goods: state.goodsReducer.goods,
    goodsAvailability: state.goodsReducer.goodsAvailability,
    getGoodsHot: state.goodsReducer.getGoodsHot,
    active: state.goodsReducer.active
})

export default compose(
    connect(mapStateToProps, { getGoods, setActive, setFavourite, setBuy }),
)(GoodsAPI);