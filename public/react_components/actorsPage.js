let React = require('react');

let ActorsData = [];
let DirectionsData = [];

let ActorsPeople = () => {
    return React.createElement(
        React.Fragment,
        null,
        ActorsData.map((item, i) => React.createElement(
            "div",
            { className: "col-md-3 col-xs-6 col-sm-6 actor-block", key: i },
            React.createElement(
                "div",
                { className: "actor-img-container container-wrapper" },
                React.createElement("img", { src: "../../image/ornament/ornament_6.png", alt: "", className: "ornament-top-actor" }),
                React.createElement("img", { src: item.image, alt: "", className: "actor-img" }),
                React.createElement("img", { src: "../../image/ornament/ornament_8.png", alt: "", className: "ornament-bottom-actor" })
            ),
            React.createElement(
                "div",
                { className: "actor-name-container container-actor-posts" },
                React.createElement(
                    "p",
                    { className: "actor-position" },
                    item.name_position
                ),
                React.createElement("img", { src: "../../image/ornament/ornament_9.png", alt: "", className: "ornament-posts" }),
                React.createElement(
                    "h1",
                    { className: "actor-name" },
                    item.name_actor
                )
            )
        ))
    );
};

let Direction = () => {
    return React.createElement(
        React.Fragment,
        null,
        DirectionsData.map((item, i) => React.createElement(
            "div",
            { className: "col-md-3 col-xs-6 col-sm-6 direction-block", key: i },
            React.createElement("img", { src: "../../image/ornament/ornament_6.png", alt: "", className: "ornament-top-director" }),
            React.createElement(
                "div",
                { className: "direction-img-container" },
                React.createElement("img", { src: item.image, alt: "", className: "direction-img" }),
                React.createElement("img", { src: "../../image/ornament/ornament_8.png", alt: "", className: "ornament-bottom-director" })
            ),
            React.createElement(
                "div",
                { className: "direction-name-container" },
                React.createElement(
                    "p",
                    { className: "direction-position" },
                    item.posts
                ),
                React.createElement("img", { src: "../../image/ornament/ornament_9.png", alt: "", className: "ornament-posts-director" })
            ),
            React.createElement(
                "div",
                { className: "director-name" },
                React.createElement(
                    "h1",
                    { className: "direction-name" },
                    item.name_management
                )
            )
        ))
    );
};

(function () {
    $.ajax({
        url: '/actorsList',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            actorsParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function actorsParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        ActorsData.push(result.result[i]);
    }
}

(function () {
    $.ajax({
        url: '/directionList',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            directionParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function directionParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        DirectionsData.push(result.result[i]);
    }
}

class Actors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collective: 0
        };

        this.showActors = this.showActors.bind(this);
        this.showDirection = this.showDirection.bind(this);
    }

    showActors() {
        this.setState({
            collective: 0
        });
    }
    showDirection() {
        this.setState({
            collective: 1
        });
    }

    render() {

        let people_in_theater = null;

        if (this.state.collective === 0) {
            people_in_theater = React.createElement(ActorsPeople, null);
        } else if (this.state.collective === 1) {
            people_in_theater = React.createElement(Direction, null);
        } else {
            people_in_theater = React.createElement(PeopleTheater, null);
        }
        return React.createElement(
            "div",
            { className: "container main-actorsPage-container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    "\u0421\u041A\u041B\u0410\u0414 \u0422\u0415\u0410\u0422\u0420\u0423"
                ),
                React.createElement(
                    "div",
                    { className: "actors-button-container" },
                    React.createElement(
                        "button",
                        { className: "btn-actors", onClick: this.showActors },
                        "\u0422\u0440\u0443\u043F\u0430"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn-actors", onClick: this.showDirection },
                        "\u0414\u0438\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430 \u0445\u0443\u0434\u043E\u0436\u043D\u0454 \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E"
                    )
                ),
                people_in_theater
            )
        );
    }

}

module.exports.Actors = Actors;
