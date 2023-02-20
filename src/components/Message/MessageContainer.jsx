import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteMessage, resetMessage } from '../../redux/reducers/message-reducer';
import Message from './Message';

const MessageContainer = (props) => {
    useEffect(() => {
        if(props.isAddMessage){
            setTimeout(() => {
                props.deleteMessage(props.messages.length - 1)
            }, 1500)
        }else if(props.messages.every(item => item === undefined) && props.messages.length != 0){
            props.resetMessage()
        }
    }, [props.messages])
    return <Message {...props} />
}

const mapStateToProps = (state) => ({
    messages: state.messageReducer.messages,
    isAddMessage: state.messageReducer.isAddMessage
})

export default compose(
    connect(mapStateToProps, { deleteMessage, resetMessage }),
)(MessageContainer);