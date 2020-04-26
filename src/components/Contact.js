import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
        <h2 className="contact-me">Contact Me</h2>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xjvenzrz"
          method="POST"
        >
          <label>Name:</label>
          <input type="text" name="name" className="feedback-input" />

          <label>Email:</label>
          <input type="email" name="email" className="feedback-input" />
          <label>Message:</label>
          <textarea type="text" name="message" className="feedback-input" />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button type="submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
