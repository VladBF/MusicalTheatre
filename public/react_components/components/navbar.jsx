
let React = require('react');
let ReactDOM = require('react-dom');
let Link = require('react-router-dom').Link;

class Navbar extends React.Component{

    constructor(props){
        super(props);

    this.ReloadScript = this.ReloadScript.bind(this);
    }

    ReloadScript(){

            let carousel= $('#carousel').detach();
            $('body').append('<script src="/js/carousel.js" id="carousel"></script>')
    }

    render(){
        return(
            <div className="container main-container" id="navbar" >
                <div className="row">
                    <div className="navbar navbar-inverse navbar-fixed-top  col-xs-12 col-md-12 col-sm-12">
                        <div className="container">

                            <div className="collapse navbar-collapse navba-children-main-container" id="responsive-menu">
                                <ul className="nav navbar-nav navbar-list">
                                    <li className="navbar-links"><Link to="/news">Новини</Link></li>
                                    <li className="navbar-links"><Link to="/actors">Склад театру</Link></li>
                                    <li className="navbar-links"><Link to="/repertoire">Репертуар</Link></li>

                                    <li className="navbar-links" onClick={this.ReloadScript}><Link to="/">
                                        <div className="navbar-mask-container">
                                            <img src="../../image/mask.png" alt="" className="mask"/>
                                        </div>
                                    </Link></li>

                                    <li className="navbar-links"><Link to="/story">Історія Театру</Link></li>
                                    <li className="navbar-links"><Link to="/tickets">Квитки</Link></li>
                                    <li className="navbar-links"><Link to="/contacts">Контакти</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports.Navbar = Navbar;








