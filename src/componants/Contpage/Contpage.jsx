import React from "react";

import { Component } from "react";
import "./Contpage.css";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Suspense } from "react";
import { withTranslation } from 'react-i18next';

class ContpageComp extends Component {
  state = {};

  render() {
      const {t}=this.props
    return (
      <section className="Contpage-wrapper">

      
          <div className={"header "+this.props.i18n.language}>
            <h2>{t("main.cont.tit")}</h2>
            <p>
              {t("main.hero.desc")}
          
            </p>
          </div>

          <div className="container">
            <div className="contact-info">
              <div className="box">
                <div className="icon">
                  <MdLocationOn size={35} />
                </div>
                <div className={"text "+this.props.i18n.language}>
                  <h3> {t("main.cont.a")}</h3>
                  <p>{t("main.cont.address")}</p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <MdPhone size={25} />
                </div>
                <div className={"text "+this.props.i18n.language}>
                  <h3> {t("main.cont.call")} </h3>
                  <p>+02 01147783340</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <MdOutlineEmail size={25} />
                </div>
                <div className={"text "+this.props.i18n.language}>
                  <h3> {t("main.cont.em")} </h3>
                  <p>sales@cretematic.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <h2> {t("main.cont.calln")} </h2>
                <div className="input-box">
                  <input type="text" required="required" />
                  <span>  {t("main.cont.name")}  </span>
                </div>
                <div className="input-box">
                  <input type="text" required="required" />
                  <span>  {t("main.cont.em")}  </span>
                </div>
                <div className="input-box">
                  <textarea required="required"></textarea>

                  <span> </span>
                </div>
                <div className="input-box">
                  <input type="submit" value={ t("main.cont.m") } />
                </div>
              </form>
            </div>
          </div>
       
      </section>
    );
  }
}


const MyComponent=withTranslation()(ContpageComp)

export default Contpage;

function Contpage(){
  return( 
    <Suspense>
      <MyComponent/>
    </Suspense>
   )
}

