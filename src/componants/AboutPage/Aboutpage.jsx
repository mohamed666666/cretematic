import React from "react";
import { Component } from "react";
import About from "../About/about";
import Hero from "../hero/hero";
import { withTranslation } from "react-i18next";

class Aboutpagecomp extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <section className="a-wrapper">
        <div className="a-container paddings innerWidth flexCenter ">
          <div className={"hero-title h" + this.props.i18n.language}>
            <h1>
              <span className={"red "}>{t("main.hero.tit1")} </span> <br />{" "}
              {t("main.hero.tit2")}
            </h1>
          </div>
          <div className={"info " + this.props.i18n.language}>
            <div className="desc secondaryText">
            <span className="secondaryText">{t("Apage.desc1")}</span>
            </div>
           
          </div>
          <div className={"info " + this.props.i18n.language}>
            <span className= {"gtit primaryText " + this.props.i18n.language}>  {t("Apage.gtit")}</span>
            <br/>
            <br/>
            <div className=" desc secondaryText "><span className="secondaryText">{t("Apage.goal")}</span></div>
            
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutpage;

const MyComponant = withTranslation()(Aboutpagecomp);
function Aboutpage() {
  return (
    <React.Fragment>
      <MyComponant />
      <About />
    </React.Fragment>
  );
}
