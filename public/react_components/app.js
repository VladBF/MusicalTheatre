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

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                BrowserRouter,
                null,
                React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(Navbar, null),
                    React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'div',
                            { className: 'main-pages-container' },
                            React.createElement(
                                'div',
                                { className: 'button-language-container' },
                                React.createElement(
                                    'button',
                                    { className: 'button-language' },
                                    'Eng'
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'button-language' },
                                    'Ukr'
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'button-language' },
                                    'Rus'
                                )
                            ),
                            React.createElement(Route, { exact: true, path: '/', component: Home }),
                            React.createElement(Route, { exact: true, path: '/actors', component: Actors }),
                            React.createElement(Route, { exact: true, path: '/repertoire', component: Repertoire }),
                            React.createElement(Route, { exact: true, path: '/story', component: Story }),
                            React.createElement(Route, { exact: true, path: '/news', component: News }),
                            React.createElement(Route, { exact: true, path: '/contacts', component: Contacts })
                        )
                    )
                )
            )
        );
    }

}

module.exports.MainComponent = MainComponent;
