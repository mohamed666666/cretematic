import { Component } from "react";

import "./contact.css";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
 

import { Suspense } from "react";
import { withTranslation } from 'react-i18next';

class ContactComp extends Component {
  state = {};
  render() {
    const {t}=this.props;
    return (
      <section className=" c-wrapper" id="contact">
        <div className={"c-container paddings innerWidth flexCenter  "+this.props.i18n.language}>
          {/* left side  */}
          <div className="c-left flexColStart">
            <span className="primaryText header">{t("main.cont.tit")}</span>
            <div className="line"></div>

            <span className="secondaryText">{t("main.cont.info")}<br/>
            <MdLocationPin size={35} className="icon" />
              {t("main.cont.address")} </span>

            <div className="flexColStart c-modes">
              {/* first row */}
              <div className=" flexColStart row">
                <div className="flexStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={30} />
                    </div>

                    <div className="flexColStart detail">
                      <span className="primaryText">{t("main.cont.call")}</span>
                      <span>02-33928436</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> {t("main.cont.calln")}</div>
                </div>
              </div>


              <div className=" flexColStart row">
                <div className="flexStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdPhone size={30} />
                    </div>

                    <div className="flexColStart detail">
                      <span className="primaryText">{t("main.cont.ph")}</span>
                      <span>+02 01147783340 </span>
                    </div>
                  </div>
                  <div className="flexCenter button"> {t("main.cont.calln")}</div>
                </div>
              </div>


              <div className=" flexColStart row">
                <div className="flexStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdMail size={30} />
                    </div>

                    <div className="flexColStart detail">
                        <a href="mailto:sales@cretematic.com">
                      <span className="primaryText">{t("main.cont.em")}</span>
                      <br/>
                      <span>sales@cretematic.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="flexCenter button"> {t("main.cont.m")} </div>
                </div>
              </div>


            </div>
          </div>

          {/* right side */}
          <div className="c-right c-image-container">
            <img src="contact.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;




const MyComponent = withTranslation()(ContactComp);

function Contact(){
  return(
    <Suspense>
      <MyComponent/>
    </Suspense>
  )
}