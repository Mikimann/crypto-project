import PropTypes from 'prop-types';

function Input(props) {
  const { onChange } = props;
  const handleChange = (e) => {
    const { value: changedValue } = e.target;
    onChange(changedValue, e);
  };

  return (
    <div className="mt-1 relative rounded-md shadow-md">
      <input
        {...props}
        onChange={handleChange}
        className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
      />
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
