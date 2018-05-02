let React = require('react');

let ActorsData = [];

let ActorsPeople = () => {
    return React.createElement(
        React.Fragment,
        null,
        ActorsData.map((item, i) => React.createElement(
            "div",
            { className: "col-md-3 col-xs-6 col-sm-6 actor-block", key: i, "data-id": item.actor_id },
            React.createElement(
                "div",
                { className: "actor-img-container" },
                React.createElement("img", { src: item.image, alt: "", className: "actor-img" })
            ),
            React.createElement(
                "div",
                { className: "actor-name-container" },
                React.createElement(
                    "p",
                    { className: "actor-position" },
                    item.name_position
                ),
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
        "h1",
        null,
        "\u0414\u0438\u0440\u0435\u043A\u0446\u0456\u044F"
    );
};

let PeopleTheater = () => {
    return React.createElement(
        "h1",
        null,
        "\u041B\u044E\u0434\u0438 \u0442\u0435\u0430\u0442\u0440\u0443"
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
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function dataParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        ActorsData.push(result.result[i]);
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
        this.showPeopleTheater = this.showPeopleTheater.bind(this);
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
    showPeopleTheater() {
        this.setState({
            collective: 2
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
                    "div",
                    { className: "actors-button-container" },
                    React.createElement(
                        "button",
                        { className: "btn btn-primary", onClick: this.showActors },
                        "\u0422\u0440\u0443\u043F\u0430"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-primary", onClick: this.showDirection },
                        "\u0414\u0438\u0440\u0435\u043A\u0446\u0456\u044F \u0442\u0430 \u0445\u0443\u0434\u043E\u0436\u043D\u0454 \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-primary", onClick: this.showPeopleTheater },
                        "\u041B\u044E\u0434\u0438 \u0442\u0435\u0430\u0442\u0440\u0443"
                    )
                ),
                people_in_theater
            )
        );
    }

}

module.exports.Actors = Actors;
