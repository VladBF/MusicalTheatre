let React = require('react');

class Actors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: "container main-actorsPage-container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    "Actors PAGE"
                )
            )
        );
    }

}

module.exports.Actors = Actors;
