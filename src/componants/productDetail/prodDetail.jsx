import React from "react";

import { useParams } from "react-router-dom";
import "./prodDetails.css";

import data from "../../utils/data.json";
import { useState } from "react";
import { MdArrowBackIos ,MdArrowForwardIos } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";

import { useTranslation } from 'react-i18next';



const ProdDetail = () => {

  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const product = data.filter((p) => p.id === parseInt(id))[0];
  const sliderImages = product.image;
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }


  const reproduce_desc=( str )=>{
   
    return str.split("•");

  }

  return (
    <section className="Pdetails-wrapper">
      <div className=" flexCenter innerWidth paddings d-container">
        <div className={"p-title  flexColCenter "+i18n.language}>
          <span className="primaryText ">{  i18n.language=="ar"? product.namear  :    product.name}</span>
        </div>

        <div className="image-slider flexCenter " >
        <div class = "left">
               <MdArrowBackIos onClick = {prevSlide} />
            </div>
            <div class="right"> 
               <MdArrowForwardIos onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide} className="image" />}
                  </div>
               );
            })}
        </div>

        <div  className="flexCenter paddings innerWidth">
        <Accordion className="accordian"  preExpanded={[0]} >
              <AccordionItem className="Accordinitem" uuid={0}>
                <AccordionItemHeading>
                  <AccordionItemButton className="Accordinibutton">
                    <div className="primaryText flexCenter ">{t("pdetail.what")} {  i18n.language=="ar"? product.namear  :    product.name} ?</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className={"secondaryText "+i18n.language}>
                    { i18n.language=="ar" ? product.detailar :  product.what}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="Accordinitem" uuid={1}>
                <AccordionItemHeading>
                  <AccordionItemButton className="Accordinibutton">
                    <div className="primaryText flexCenter ">{t("pdetail.why")} {  i18n.language=="ar"? product.namear  :    product.name}?</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className={"secondaryText "+i18n.language}>
             
                    {
                      
                      reproduce_desc(i18n.language=="ar"? product.whyar:product.why).map((line,index)=>{
                        return <span>• {line} <br/></span> 
                      }

                      )

                      
                      
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              </Accordion>

        </div>
      </div>
    </section>
  );
};

export default ProdDetail;



