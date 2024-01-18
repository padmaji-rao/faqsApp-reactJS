import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  displayAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isActive) {
      return (
        <div>
          <hr className="horiz-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  displayButton = () => {
    const {isActive} = this.state
    let imageUrl = null
    let imageAlt = null
    if (!isActive) {
      imageUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      imageAlt = 'plus'
    } else {
      imageUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      imageAlt = 'minus'
    }

    return (
      <button
        type="button"
        className="active-button"
        onClick={this.onToggleButton}
      >
        <img src={imageUrl} alt={imageAlt} className="button-image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {isActive} = this.state
    const {questionText} = faqDetails

    console.log(faqDetails.id, isActive)

    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="faq-heading">{questionText}</h1>
          {this.displayButton()}
        </div>

        {this.displayAnswer()}
      </li>
    )
  }
}

export default FaqItem
