import { Component } from "react";
import "./Companies.css"

import { Suspense } from "react";
import { withTranslation } from 'react-i18next';
class Companiescomp extends Component {
  state = {logos:["Aco.png","shams.png","alam.png","swedy.png","cleo.png","delta.png","w.svg","artoc.png","Row.png","lots.jpg"]};
  render() {
    const { t } = this.props;
    return (
      
      
      <section className="comp-wrapper" > 
      <div className="comp-head flexCenter">
        <span className={"paddings innerWidth primaryText header flexCenter " +this.props.i18n.language}>{t("main.cust")}</span>
        <div className="line flexCenter"></div>
        </div>
        <div className="paddings innerWidth flexCenter comp-container">
        

           {
            this.state.logos.map(
              (l ,ind)=>{return(<img  key={ind} src={"./componieslogos/"+l} />) }
            )
           }
           
        </div>
      </section>
    );
  }
}

export default Companies;


const MyComponent = withTranslation()(Companiescomp);


function Companies(){
  return(
    <Suspense>
    <MyComponent/>
  </Suspense>
  )
     
}