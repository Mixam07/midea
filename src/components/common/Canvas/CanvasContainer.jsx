import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTypePopup } from '../../../redux/reducers/popup-reducer';
import Canvas from './Canvas';

const mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, { setTypePopup }),
)(Canvas);