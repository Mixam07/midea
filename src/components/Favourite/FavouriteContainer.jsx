import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import { getGoods } from '../../redux/reducers/goods-reducer';
import { getGoodInFavourite } from '../../redux/reducers/goods-selector';
import Favourite from './Favourite';
  
const mapStateToProps = (state) => {
    return{
        goods: getGoodInFavourite(state)
    }
}
  
export default compose(
    connect(mapStateToProps, { getGoods }),
)(Favourite);