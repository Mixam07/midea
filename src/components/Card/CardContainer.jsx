import { connect } from 'react-redux';
import { compose } from 'redux';
import { setBuy, setFavourite } from '../../redux/reducers/goods-reducer';
import Card from './Card';

const mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, { setFavourite, setBuy }),
)(Card);