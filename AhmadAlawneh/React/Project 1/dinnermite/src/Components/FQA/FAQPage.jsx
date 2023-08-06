import React, { Component } from 'react';
import './FAQPage.css'; 
import { getFAQs } from './faqService.js'; 

class FAQPage extends Component {
  state = {
    faqs: [], 
  };

  componentDidMount() {
    const faqs = getFAQs(); 
    this.setState({ faqs }); 
  }

  render() {
    const { faqs } = this.state;

    return (
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent=".faq-container"
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                    <img src={faq.image} alt={faq.question} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FAQPage;