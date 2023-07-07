import React from "react";
import OutsideClickHandler from 'react-outside-click-handler';

import { Component  ,Suspense} from "react";
import './header.css';
import { Link } from "react-router-dom";

import { MdMenu } from "react-icons/md";
import { HashLink  } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

import { withTranslation } from 'react-i18next';


class HeaderComponant extends Component {
    state = { open:false } 


    
    getmenustyes=(open)=>{
            if(document.documentElement.clientWidth< 800){
                return {right:!open && "-100%"};
            }
    }
    change=()=>{
        this.setState({open:!this.state.open});
        
    }
    hideoutside=()=>{
        this.setState({open:false});
    }

    changelang=(lang)=>{
            this.props.i18n.changeLanguage(lang);
    }

    
    render() { 
           const { t } = this.props;
           const locales = {
            en: { title: 'English' },
            ar:{title:"عربي"}
            };
          

        return (
            <OutsideClickHandler onOutsideClick={() => {this.hideoutside()}}>
            
            
        <section className="h-wrapper ">
            <div className={"h-container flexCenter paddings innerWidth  " +this.props.i18n.language} >
            <Link to="/">
                <img src="../logo.png" width={200} />

             </Link>


                <div className="Menu-icon" onClick={this.change}>
                    <MdMenu  size={50} />
                    </div>

          
                   
                <div className={"h-menu  flexCenter "+this.props.i18n.language } style={this.getmenustyes(this.state.open)}>
                
                    <Link to="/">
                {t('main.header.home')} </Link>

            
                    <Link to="/solutions">    {t('main.header.solutions')} </Link>
                   <Link to="/About">{t('main.header.about')}</Link>

                   <Link to="/Contact"> {t('main.header.contact')}</Link>

                    <button className="button">
                    <a href="mailto:sales@cretematic.com">{t('main.header.strat')} </a>
                    </button>
                    <div className={" flexCenter langbutton ar"}>
                {Object.keys(locales).map((locale) => (
          <li key={locale}><button className="btnlng"   type="submit" onClick={() => this.changelang(locale)}>
            {locales[locale].title}
          </button></li>
        ))}
                </div>

                </div>
                
            </div>
        </section>
        </OutsideClickHandler>
        );
    }
}


const MyComponent = withTranslation()(HeaderComponant)

function Header(){
    return (
      <Suspense fallback="Loading">
      
            <MyComponent/>
            </Suspense>
    )
}
 
export default Header;