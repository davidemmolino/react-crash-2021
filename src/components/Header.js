import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {

  const onClick = () => {
    console.log('clicked');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Task" onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: "default value"
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
