let React = require('react');



class Contacts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-contactsPage-container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12 contact-main-container">
                        <h1 className="contact-main-name">КОНТАКТИ</h1>
                        <hr/>
                        <div className="contact-info-container">
                            <div className="col-md-6">
                                <h2 className="contact-name-info">Приймальня директора:</h2>
                                <h2 className="contact-info">+38-044-425-30-15</h2>
                            </div>
                            <div className="col-md-6">
                                <h2 className="contact-name-info">Pr-менеджер:</h2>
                                <h2 className="contact-info">+38-067-236-43-95</h2>
                                <h2 className="contact-info">+38-099-202-31-32</h2>
                            </div>
                            <br/>
                            <br/>
                            <div className="col-md-6">
                                <h2 className="contact-name-info">Сектор глядача:</h2>
                                <h2 className="contact-info">+38-044-﻿501-10-44</h2>
                            </div>
                            <div className="col-md-6">
                                <h2 className="contact-name-info">Адміністратори:</h2>
                                <h2 className="contact-info">+38-044-﻿425-87-66</h2>
                            </div>
                            <hr/>
                            <div className="col-md-12">
                                <hr/>
                                <h2 className="contact-name-info">Каса:</h2>
                                <h2 className="contact-info">+38-044-﻿425-87-66</h2>
                                <hr/>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                            <div className="col-md-6">
                                <h1 className="contact-main-name">АДРЕСА</h1>
                                <h2 className="contact-name-info">вулиця Кавалерійська, 8</h2>
                            </div>
                            <div className="col-md-6">
                                <h1 className="contact-main-name">ЕЛЕКТРОНА АДРЕСА</h1>
                                <h2 className="contact-name-info">email:</h2>
                                <h2 className="contact-info">benjamin.vh25@gmail.com</h2>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <hr/>
                            <h1 className="contact-main-name">КАРТА</h1>
                            <div className="container-for-cart">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.003485180565!2d32.256455115391596!3d48.513997879255236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d042a56a16926f%3A0x58825a2ff68cf385!2z0JrRgNC-0L_QuNCy0L3QuNGG0YzQutC40Lkg0LDQutCw0LTQtdC80ZbRh9C90LjQuSDRg9C60YDQsNGX0L3RgdGM0LrQuNC5INC80YPQt9C40YfQvdC-LdC00YDQsNC80LDRgtC40YfQvdC40Lkg0YLQtdCw0YLRgA!5e0!3m2!1suk!2sua!4v1525800297251" width="1100" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }


}


module.exports.Contacts = Contacts;



