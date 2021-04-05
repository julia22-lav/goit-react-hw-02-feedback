import { Component } from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return options.map((option) => (
      <button
        onClick={() => {
          onLeaveFeedback(option);
        }}
        key={option}
        className={s.feedbackBtn}
      >
        {option}
      </button>
    ));
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
