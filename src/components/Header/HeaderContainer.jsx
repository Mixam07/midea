import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTypePopup } from '../../redux/reducers/popup-reducer';
import Header from './Header';

const mapStateToProps = (state) => ({
    typePopup: state.popupReducer.typePopup
})

export default compose(
    connect(mapStateToProps, { setTypePopup }),
)(Header);