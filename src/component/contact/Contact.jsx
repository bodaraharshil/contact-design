import React, { Component } from "react";
import "./Contact.css";
import Icon from "../socialMedia/Icon";
import CkeckListForm from "../contact/Form/CkeckListForm";
import Img from "./Map";
// import MainForm from './Form/MainForm'
import '../button/Button.css'
import MainForm from "./Form/MainForm";
import Button from "../button/Button";



class Contact extends Component {

  addedclass = (e) => {
    e.preventDefault();
    const added = document.getElementById("mainner");
    added.classList.toggle("opencontact");
  };

  clickhandlesna=()=>{
    var element = document.getElementById("container");
    element.hidden()
    
}
  render() {
    
    return (
      
      <>
      <div id="mainner" className="mainners">
      <button className="buttonclose" onClick={(e) => this.addedclass(e)}>
      <svg xmlns="https://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18">
                <path fill="#5C5F6E" fill-rule="evenodd" d="M21.7131495,8.30441922 L22.8392418,8.86746538 L21.7176501,9.42826122 L21.8216762,9.53228733 L14.0757875,17.278176 C13.4779181,17.8760455 12.5128049,17.8802703 11.9108381,17.2783035 C11.313039,16.6805044 11.3156571,15.7086626 11.9109656,15.113354 L16.6568542,10.3674654 L1.49116761,10.3674654 C0.667618478,10.3674654 0,9.70166814 0,8.86746538 C0,8.03903825 0.67145511,7.36746538 1.49116761,7.36746538 L16.6636052,7.36746538 L11.9109656,2.61482579 C11.3156571,2.01951728 11.313039,1.04767543 11.9108381,0.449876354 C12.5128049,-0.152090468 13.4779181,-0.147865648 14.0757875,0.450003834 L21.8216762,8.1958925 L21.7131495,8.30441922 Z"></path>
            </svg>

      </button>
        <section id="container">
          <div className="inner-semi-left hiderblog">
            <div className="contact-title">
              <i className="close fas fa-arrow-right"></i>
              <h2>We’re here</h2>
              <p>Our door is always open for a good cup of coffee.</p>
            </div>
            <div className="offc-address">
              <h4>Our Office</h4>
              <p>
                Jacob van Lennepkade 334-H <br></br>1053 NJ Amsterdam <br></br>
                The Netherlands 🇳🇱
              </p>
              <Icon />
              <Img />
            </div>
          </div>
          <div className="inner-semi-right hiderblog">
            <div className="inner-form-heading">
              <h2>Let's talk.</h2>
              <p>Share your excitement with us.</p>
              <a className="effect" href="mailto:info@gmail.com">
                info@gmail.com
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className="form-list">
              <h4>Let's talk about</h4>
              <CkeckListForm />
            </div>
            {/* Second form page */}
            <div className="second-page"></div>
          </div>
          {/* <MainForm/> */}

        </section>
        <section>
          <MainForm/>
        </section>
        </div>

      </>
    );
  }
}

export default Contact;
