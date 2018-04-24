let React = require('react');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: "container main-homePage-container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    "HOME PAGE"
                )
            )
        );
    }

}

module.exports.Home = Home;
