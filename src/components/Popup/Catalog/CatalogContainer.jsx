import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCatalog } from '../../../redux/reducers/catalog-reducer';
import { setTypePopup } from '../../../redux/reducers/popup-reducer';
import Catalog from './Catalog';

const CatalogAPI = (props) => {
    useEffect(() => {
        props.getCatalog()
    }, []);

    return <Catalog {...props} />
}

const mapStateToProps = (state) => ({
    catalog: state.catalogReducer.catalog
})

export default compose(
    connect(mapStateToProps, { setTypePopup, getCatalog }),
)(CatalogAPI);