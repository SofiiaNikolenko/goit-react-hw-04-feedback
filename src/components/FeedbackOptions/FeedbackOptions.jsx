import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onFeedback }) => {
  return (
    <div>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};
