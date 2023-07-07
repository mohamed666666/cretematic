import { Component } from "react";
import "./about.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import data from "../../utils/accordion";
import { Suspense } from "react";

import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';


class AboutComp extends Component {
  state = {};
  render() {
    const { t } = this.props;

    return (
      <section className="about-wrapper" id="about">
        <div className="flexCenter paddings innerWidth about-container">
          {/* left side */}
          <div className=" about-left  ">
            <div className="image-container">
              <img src="./About.jpg" />
            </div>
          </div>

          {/*Right Side */}
          <div className={"about-right flexColCenter "+this.props.i18n.language}>
            <span className="primaryText header">{t("main.about.ab")}</span>
            <div className="line"></div>
            <span className="secondaryText">
            {t("main.about.abdesc")}
            </span>



            <Accordion className="accordian"  preExpanded={[0]} >
              <AccordionItem className="Accordinitem" uuid={0}>
                <AccordionItemHeading>
                  <AccordionItemButton className="Accordinibutton ">
                    <div className={"primaryText header flexCenter "+this.props.i18n.language}>{t("main.about.mess")}</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">
                    {t("main.about.messdesc")}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="Accordinitem">
                <AccordionItemHeading>
                  <AccordionItemButton className="Accordinibutton">
                    <div className={"primaryText header flexCenter "+this.props.i18n.language}>{t("main.about.vess")}</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">
                  {t("main.about.vdesc")}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
const MyComponent = withTranslation()(AboutComp);


function About(){
  return(
  <Suspense>
    <MyComponent/>
  </Suspense>)
}
