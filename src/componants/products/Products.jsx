import { Component } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from "swiper/react";
import "swiper/css";
import "./Products.css"
import data from "../../utils/data.json";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { withTranslation } from 'react-i18next';


class ProductsComp extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <section className="p-wrapper " id="solutions">
      <div  className=" paddings innerWidth   p-container">
        <div className="p-head primaryText flexCenter   ">
         
          <span className={"paddings primaryText innerWidth flexCenter " +this.props.i18n.language}>{t("main.prods")}</span>
          <div className="line"></div>
        </div>
        
          <Swiper 
          breakpoints={{
            // when window width is >= 640px
            480:{
              width:480,
              slidesPerView: 1
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1100: {
              width: 1100,
              slidesPerView: 3,
            },

          }}
          
          
          >
          
              {
                  data.map((card,i)=>(
                      <SwiperSlide  key={i}>
                        
                        <Link to={"/productdetali/"+card.id} >
                          <div className="p-card ">
                              <img src={card.image[0]} />
                              <div className="overlay">
                              <div className="text">
                              <span className="primaryText">{this.props.i18n.language== 'ar' ? card.namear : card.name }</span>
                              <span className="secondaryText">{this.props.i18n.language== 'ar' ? card.detailar.substring(0,150) : card.detail.substring(0,150)}</span>
                              </div>
                              </div>
                          </div>
                          </Link>
                          
                      </SwiperSlide>
                  )
                  )

              }
            
              <div className="buttons-container">
              <Sliderbuttons/>
              </div>
          </Swiper>
         

      </div>
    </section>
    );
  }
}

export default Products;


const Sliderbuttons= ()=> {
    const swiperuser=useSwiper();
     return (
        <div className="flexStart s-button">
            
            <button onClick={()=> swiperuser.slidePrev()}> &lt; </button>
            <button onClick={()=> swiperuser.slideNext() } > &gt; </button>
        </div>
     );
}


const MyComponent = withTranslation()(ProductsComp);

function Products(){
  return(
    <Suspense>
    <MyComponent/>
  </Suspense>
  )
}



/*

      <section className="all-wrapper">
      <div className=" paddings innerWidth   p-container">
      <div className="p-head primaryText flexCenter   ">
        <span  className={ "paddings innerWidth flexCenter  "  +this.props.i18n.language}>
        {t("main.prods")}
        </span>
      </div>
      <div className="s-content paddings innerWidth flexCenter " >
{
   data.map((card,i)=>(
                    
                        
      <Link to={"/productdetali/"+card.id} key={i}>
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
     */