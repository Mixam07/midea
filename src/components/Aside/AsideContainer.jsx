import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTypePopup } from '../../redux/reducers/popup-reducer';
import Aside from './Aside';

const mapStateToProps = (state) => ({
    typePopup: state.popupReducer.typePopup
})

export default compose(
    connect(mapStateToProps, { setTypePopup }),
)(Aside);