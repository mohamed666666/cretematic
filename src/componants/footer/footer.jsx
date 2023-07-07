import { Component } from "react";
import { MdLocationPin } from "react-icons/md";
import "./footer.css";

import { Suspense } from "react";
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


class FooterComp extends Component {
  state = {};
  render() {
    const{t}=this.props
    return (
      <section className="footer-wrapper">
        <div className="flexCenter paddings innerWidth footer-container">
          <div className="flexColStart left-footer">
            <img src="../footer-logo.png" width={200} />
          </div>
          <div className={"flexColStart right-footer "+this.props.i18n.language}>
            <span className=" footerinfo ">
              <MdLocationPin size={35} />
             {t("main.cont.address")}
            </span>
            <div className="menu-footer flexCenter">
                    <Link to="/"> {t("main.header.home")}</Link>  
                   <Link to="/solutions"> {t("main.header.solutions")}</Link>
                  <Link to="/About" >{t("main.header.about")}</Link> 

               <Link to="/Contact" > {t("main.header.contact")}</Link>    


            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
const MyComponant=withTranslation()(FooterComp);

function Footer(){
  return(
    <Suspense>
        <MyComponant/>
    </Suspense>
  )
}