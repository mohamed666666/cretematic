import React, { Suspense } from "react";
import "./hero.css";
import { Component } from "react";
import { withTranslation } from 'react-i18next';



class HeroComponant extends Component {
  state = {};
  render() {

    const { t } = this.props;
    return (
      <section className="hero-wrapper">

      <div class="slider">
  <div class="slide"></div>
  <div class="slide"></div>
  <div class="slide"></div>




        <div className="paddings innerWidth flexCenter hero-container">
          <div className="flexColCenter hero-left">
            <div className={"hero-title h"+this.props.i18n.language}>
              <h1>
             <span className="red">{t("main.hero.tit1")} </span>    <br /> {t("main.hero.tit2")}
              </h1>
            </div>
            <div className="flexColCenter hero-desc ">
              <span className="secondaryText">
               {t("main.hero.desc")}
              </span>
            </div>



            
          </div>
          {
/*
          <div className="flexCenter hero-right">
            <div className="hero-image">
              <img src="./hero1.jpg" />
            </div>
          </div>*/}
        </div>

        </div>  
      </section>
    );
  }
}

export default Hero;

const MyComponent = withTranslation()(HeroComponant)

function Hero(){
  return(
    <Suspense>
    <MyComponent/>
  </Suspense>
  )
     
}
