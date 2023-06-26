import PropTypes from 'prop-types';

export const Notificatio = ({message}) => {
    return (
        <p>{ message }</p>
    )
}

Notificatio.propTypes = {
    message: PropTypes.string.isRequired,
}