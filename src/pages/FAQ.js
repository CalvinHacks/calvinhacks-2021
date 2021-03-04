import React, { useState } from "react";
import image from "../images/mountain.png";
// import Footer from "../components/footer";

// Import styles
import "../pages/FAQ.css";

function FAQ() {
  const [faqs, setfaqs] = useState([
    /* content input*/
    {
      question: "What is a hackathon?",
      answer:
        "CalvinHacks 2020, our hackathon, is a 24Hr event where you can build your ideas, network, show off, and have fun. This 24Hr event, from 6PM Friday to 6PM Saturday, will allow you to form a team, choose an idea, build it out, and show it off for a chance to win! Hundreds of students will attend, and you should too!",
      open: false,
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone! The event is open to programmers, artists, designers, project managers, entrepreneurs, and any student who wants to create! No prior coding or technical experience is necessary; ​all students and recent graduates (within 1 year) are​ ​welcome​ ​to​ ​participate​ ​in​ ​the​ ​hackathon!",
      open: false,
    },
    {
      question: "What if I'm a beginner?",
      answer:
        "While helpful, no previous programming/engineering experience is required. Mentors will be available to help you with your project, don't worry. You're guaranteed to learn, regardless of your previous experience!",
      open: false,
    },
    {
      question: "Is the hackathon all virtual?",
      answer:
        "The entirety of the hackathon will be hosted online! You can attend from anywhere in the world!",
      open: false,
    },
    {
      question: "Can I go in person?",
      answer:
        "If you are a Calvin student, we are making space for you to hack! Calvin students can come for an in-person hack from 6 PM to 4 AM. Due to university policies this year, we are sorry to say that we are unable to host non-Calvin students in person. We are excited to see students in person and virtually!",
      open: false,
    },
    {
      question: "What should I bring?",
      answer:
        "You should definitely bring your student ID, laptop, and charger. If you need additional hardware for your project, we suggest bringing that along as well.",
      open: false,
    },
    {
      question: "What's the cost?",
      answer: "Free!",
      open: false,
    },
    {
      question: "What if I don't have a team or project idea?",
      answer:
        "Having a team or an idea is not required! We will have an opportunity for you to find a team. There will be a wealth of mentors to help inspire you with an idea, so don't worry about that either!",
      open: false,
    },
    {
      question: "How big can my team be?",
      answer:
        "Teams consist of 1-4 people. We suggest working with others, but you can work alone if you'd like!",
      open: false,
    },
    {
      question: "What can I make?",
      answer:
        "You can make just about anything software or hardware related. The only twist is that it should be somewhat related to travel. Your imagination is the limit!",
      open: false,
    },
    {
      question: "Can I start my project before the event?",
      answer:
        "No, sorry! However, we encourage you to use third-party APIs, services, and frameworks during the event!",
      open: false,
    },
    {
      question: "Is there a Code of Conduct for CalvinHacks?",
      answer: "Yes, we observe the MLH Code of Conduct.",
      open: false,
    },
    {
      question: "Can I help out?",
      answer:
        "Yes! We'd love to have you! Please email us at hacks@calvin.edu.",
      open: false,
    },
  ]);

  /* change state of the faq box */
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <div className="faq-container">
        <span className="white">aaa</span>
        <div className="image-container">
          <img src={image} alt="mountain" className="image"></img>
        </div>

        <div className="faqs">
          <h1 className="title">FAQ</h1>
          <p className="title">Frequently Asked Questions</p>

          <div className="faqs-content">
            {faqs.map((faq, i) => (
              <div
                className={"faq-box " + (faq.open ? "open" : "")}
                onClick={() => toggleFAQ(i)}
              >
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
          <div className="contact">
            If you have any other questions, suggestions, or concerns, please
            contact us at <a href="mailto:hacks@calvin.edu">hacks@calvin.edu</a>
            .
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default FAQ;
