import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    console.log(FaqItem)
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="main-heading">FAQs</h1>
          <div className="faqs-container">
            <ul className="list-container">
              {faqsList.map(eachItem => (
                <FaqItem key={eachItem.id} faqDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
