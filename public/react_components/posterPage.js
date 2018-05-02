let React = require('react');

class Poster extends React.Component {
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
                    "Poster PAGE"
                )
            )
        );
    }

}

module.exports.Poster = Poster;
