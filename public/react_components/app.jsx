let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;


/*--components--*/

let Navbar = require('./components/navbar').Navbar;


/*--pages--*/


let Home = require('./homePage').Home;
let Actors = require('./actorsPage').Actors;
let Repertoire = require('./repertoirePage').Repertoire;
let Story = require('./storyPage').Story;
let News = require('./newsPage').News;
let Contacts = require('./contactsPage').Contacts;



class MainComponent extends React.Component{

    constructor(props){
        super(props)
    }

        render(){
            return(
                <React.Fragment>
                    <BrowserRouter>
                        <React.Fragment>

                            {/*NAVBAR*/}
                            <Navbar/>
                            {/*PAGES*/}

                            <React.Fragment >
                                <div className="main-pages-container">
                                    <div className="button-language-container">
                                        <button className="button-language">Eng</button>
                                        <button className="button-language">Ukr</button>
                                        <button className="button-language">Rus</button>
                                    </div>
                                    <Route exact path = "/" component={Home}/>
                                    <Route exact path = "/actors" component={Actors}/>
                                    <Route exact path = "/repertoire" component={Repertoire}/>
                                    <Route exact path = "/story" component={Story}/>
                                    <Route exact path = "/news" component={News}/>
                                    <Route exact path = "/contacts" component={Contacts}/>
                                </div>


                            </React.Fragment>
                        </React.Fragment>
                    </BrowserRouter>
                </React.Fragment>
            )
        }




}


module.exports.MainComponent = MainComponent;

