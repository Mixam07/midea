import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getSearchGoods } from '../../redux/reducers/search-reducer';
import { getCatalog } from '../../redux/reducers/catalog-reducer';
import { setFavourite, setBuy } from '../../redux/reducers/goods-reducer';
import Search from './Search';

const SearchAPI = (props) => {
    useEffect(() => {
        props.getSearchGoods();
        props.getCatalog();
    }, [])
    return <Search {...props} />
}

const mapStateToProps = (state) => ({
    goods: state.searchReducer.goods,
    catalog: state.catalogReducer.catalog
})

export default compose(
    connect(mapStateToProps, { getSearchGoods, getCatalog }),
)(SearchAPI);