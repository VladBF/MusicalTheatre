
let React = require('react');
let ReactDOM = require('react-dom');
let Link = require('react-router-dom').Link;

class Navbar extends React.Component{

    constructor(props){
        super(props);


    }


    render(){
        return(
            <div className="container" id="navbar" >
                <div className="row">
                    <div className="navbar navbar-inverse navbar-fixed-top  col-xs-12 col-md-12 col-sm-12">
                        <div className="container">

                            <div className="collapse navbar-collapse" id="responsive-menu">
                                <ul className="nav navbar-nav">
                                    <li ><Link to="/">Афіша</Link></li>
                                    <li ><Link to="/actors">Склад театру</Link></li>
                                    <li ><Link to="/repertoire">Репертуар</Link></li>
                                    <li ><Link to="/story">Історія Театру</Link></li>
                                    <li ><Link to="/news">Новини</Link></li>
                                    <li ><Link to="/contacts">Контакти</Link></li>
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








