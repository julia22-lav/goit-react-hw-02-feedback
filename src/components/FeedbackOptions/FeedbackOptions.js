import { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return options.map((option) => (
      <button
        onClick={() => {
          onLeaveFeedback(option);
        }}
        key={option}
      >
        {option}
      </button>
    ));
  }
}

export default FeedbackOptions;
