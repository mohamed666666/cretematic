import React from "react";
import { Component } from "react";
import data from "../../utils/data.json";
import { Link } from "react-router-dom";
import "./Aprods.css"

import { Suspense } from "react";

import { withTranslation } from 'react-i18next';

class AllproductsComp extends Component {
  state = {};
  render() {

    const {t}=this.props
    return (
      <section className="all-wrapper">
        <div className=" paddings innerWidth   p-container">
        <div className="p-head primaryText flexCenter   ">
          <span  className={ "paddings innerWidth flexCenter primaryText "  +this.props.i18n.language}>
            {t("solpage.header")}
          </span>
        </div>
        <div className="s-content paddings innerWidth flexCenter " >
{
     data.map((card,i)=>(
                      
                          
        <Link to={"/productdetali/"+card.id} >
          <div className="p-cardA ">
              <img src={card.image[0]} />
              <span className="primaryText">{this.props.i18n.language== 'ar' ? card.namear : card.name }</span>
              <span className="secondaryText">{this.props.i18n.language== 'ar' ? card.detailar.substring(0,150) : card.detail.substring(0,150)}</span>
              
          </div>
          </Link>
     
  )
  )
}
       

        </div>
        </div>

      </section>
    );
  }
}

const MyComponent= withTranslation()(AllproductsComp)

export default Allproducts;


function Allproducts(){
  return(
    <Suspense>
      <MyComponent/>
    </Suspense>
  )
}