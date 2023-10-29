import PropTypes from 'prop-types';

const Ageresult = ({ age }) => {
  return (
    <h4 className='mt-10 underline text-2xl font-bold dark:text-white'>
      You are {age.years} years old.
    </h4>
  );
};

Ageresult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default Ageresult;