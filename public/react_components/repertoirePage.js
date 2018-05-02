var _this = this;

let React = require('react');
let AboutPerformance = require('./AboutPerformancePage').AboutPerformance;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let adult = [];
let child = [];

const DataRepertoire = {
    repertoire: [],

    get: function (name) {
        return this.repertoire.filter(function (item) {
            return item.the_name_of_the_play === name;
        });
    }

};

(function () {
    $.ajax({
        url: '/repertoireList',
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
        DataRepertoire.repertoire.push(result.result[i]);
    }

    adult = result.result.filter(function (item) {
        return Number(item.age_name) > 3;
    });

    child = result.result.filter(function (item) {
        return Number(item.age_name) === 3;
    });
}

let Children = () => {
    return React.createElement(
        React.Fragment,
        null,
        child.map((item, i) => React.createElement(
            Link,
            { to: `/repertoire/${item.the_name_of_the_play}`, key: i, onClick: _this.UpScroll },
            React.createElement(
                'div',
                { className: 'col-md-6 repertory-show-element' },
                React.createElement(
                    'div',
                    { className: 'repertory-container-show-name' },
                    React.createElement(
                        'h1',
                        { className: 'repertory-show-name' },
                        item.the_name_of_the_play
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'repertory-container-show-img' },
                    React.createElement('img', { src: item.image_main, alt: '', className: 'repertory-show-img' })
                )
            )
        ))
    );
};

let Adult = () => {
    return React.createElement(
        React.Fragment,
        null,
        adult.map((item, i) => React.createElement(
            Link,
            { to: `/repertoire/${item.the_name_of_the_play}`, key: i, onClick: _this.UpScroll },
            React.createElement(
                'div',
                { className: 'col-md-6 repertory-show-element' },
                React.createElement(
                    'div',
                    { className: 'repertory-container-show-name' },
                    React.createElement(
                        'h1',
                        { className: 'repertory-show-name' },
                        item.the_name_of_the_play
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'repertory-container-show-img' },
                    React.createElement('img', { src: item.image_main, alt: '', className: 'repertory-show-img' })
                )
            )
        ))
    );
};

class AllPerformance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age_category: false
        };

        this.UpScroll = this.UpScroll.bind(this);
        this.AdultCategory = this.AdultCategory.bind(this);
        this.ChildCategory = this.ChildCategory.bind(this);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }

    AdultCategory() {
        this.setState({
            age_category: false
        });
    }
    ChildCategory() {
        this.setState({
            age_category: true
        });
    }

    render() {

        let choiceCategory = null;

        if (this.state.age_category === false) {
            choiceCategory = React.createElement(Adult, null);
        } else {
            choiceCategory = React.createElement(Children, null);
        }

        return React.createElement(
            'div',
            { className: 'col-md-12 col-xs-12 col-sm-12 all-shows-container' },
            React.createElement(
                'div',
                { className: 'button-age-category-container' },
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this.AdultCategory },
                    '\u0414\u043E\u0440\u043E\u0441\u043B\u0456'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this.ChildCategory },
                    '\u0414\u0456\u0442\u0438'
                )
            ),
            choiceCategory,
            ';'
        );
    }

}

class LookInfoAboutPerformance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Show = DataRepertoire.get(this.props.match.params.look_show);
        return React.createElement(
            'div',
            { className: 'aboutShow-container', id: 'aboutShow-container' },
            React.createElement(AboutPerformance, { infoShow: Show })
        );
    }

}

class Repertory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'container main-repertory-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    null,
                    '\u0420\u0435\u043F\u0435\u0440\u0442\u0443\u0430\u0440'
                ),
                React.createElement(
                    Switch,
                    null,
                    React.createElement(Route, { exact: true, path: '/repertoire', component: AllPerformance }),
                    React.createElement(Route, { path: '/repertoire/:look_show', component: LookInfoAboutPerformance })
                )
            )
        );
    }

}

module.exports.Repertory = Repertory;
