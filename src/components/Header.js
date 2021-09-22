import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router';

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation();
    
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/react-task-tracker' && (<Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}/>)}
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS In JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
//   }

export default Header
