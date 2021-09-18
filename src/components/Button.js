import PropTypes from 'prop-types'

const Button = ({color, text, onClick, showFutureTasks, showPastTasks}) => {

    return (
        <div>
            <button 
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className= {`btn text-uppercase ${showFutureTasks || showPastTasks ? 'active' : ''}`}
            >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
