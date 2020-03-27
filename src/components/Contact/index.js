import React from "react";
import Footer from './../Footer';
import {
  ContactSection,
  ContactTitle,
  SpanTitle,
  FormContact,
  FormInput,
  InputText,
  InputEmail,
  InputSubmit,
  InputSub,
  Textarea,

} from "./style";

const Contact = () => {
  const submitEmail = (e) => {
    e.preventDefault();
  } 

  return (
    <React.Fragment>
     `   <ContactSection>
          <div className="container">
            <ContactTitle>
              <SpanTitle>Drop </SpanTitle>Me A line
            </ContactTitle>
            <FormContact onSubmit={submitEmail}>
              <FormInput>
                <InputText type="text" placeholder="Your Name" />
                <InputEmail type="email" placeholder="Your Email" />
              </FormInput>
              <InputSub type="text" placeholder="Your Subject" />
              <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
              <InputSubmit type="submit" value="Send Message"  />
            </FormContact>
          </div>
        </ContactSection>
      <Footer />`
    </React.Fragment>
  );
};

export default Contact;
