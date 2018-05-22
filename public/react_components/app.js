let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

/*--components--*/

let Navbar = require('./components/navbar').Navbar;

/*--pages--*/

let MainPosterContainer = require('./posterPage').MainPosterContainer;
let Actors = require('./actorsPage').Actors;
let Repertory = require('./repertoirePage').Repertory;
let Story = require('./storyPage').Story;
let News = require('./newsPage').News;
let Contacts = require('./contactsPage').Contacts;
let Ticket = require('./ticketPage').Ticket;

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
                            React.createElement(Route, { exact: true, path: '/', component: MainPosterContainer }),
                            React.createElement(Route, { exact: true, path: '/actors', component: Actors }),
                            React.createElement(Route, { path: '/repertoire', component: Repertory }),
                            React.createElement(Route, { exact: true, path: '/story', component: Story }),
                            React.createElement(Route, { path: '/news', component: News }),
                            React.createElement(Route, { exact: true, path: '/contacts', component: Contacts }),
                            React.createElement(Route, { exact: true, path: '/tickets', component: Ticket })
                        )
                    )
                )
            )
        );
    }

}

module.exports.MainComponent = MainComponent;
