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
                    { className: 'repertory-info-container' },
                    React.createElement(
                        'div',
                        { className: 'repertory-container-show-name' },
                        React.createElement(
                            'h1',
                            { className: 'repertory-show-name' },
                            item.the_name_of_the_play
                        )
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_5_2.png', alt: '', className: 'ornament-play-top' }),
                    React.createElement(
                        'div',
                        { className: 'repertory-container-show-img' },
                        React.createElement('img', { src: item.image_main, alt: '', className: 'repertory-show-img' })
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-play-bottom' }),
                    React.createElement(
                        'div',
                        { className: 'repertory-duration-container' },
                        React.createElement(
                            'h3',
                            { className: 'repertory-duration' },
                            '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                            item.duration
                        )
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_1_2.png', alt: '', className: 'ornament-play-center' })
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
                    { className: 'repertory-info-container' },
                    React.createElement(
                        'div',
                        { className: 'repertory-container-show-name' },
                        React.createElement(
                            'h1',
                            { className: 'repertory-show-name' },
                            item.the_name_of_the_play
                        )
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_5_2.png', alt: '', className: 'ornament-play-top' }),
                    React.createElement(
                        'div',
                        { className: 'repertory-container-show-img' },
                        React.createElement('img', { src: item.image_main, alt: '', className: 'repertory-show-img' })
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-play-bottom' }),
                    React.createElement(
                        'div',
                        { className: 'repertory-duration-container' },
                        React.createElement(
                            'h3',
                            { className: 'repertory-duration' },
                            '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                            item.duration
                        )
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_1_2.png', alt: '', className: 'ornament-play-center' })
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
                    { className: 'btn-repertoire', onClick: this.AdultCategory },
                    '\u0414\u043E\u0440\u043E\u0441\u043B\u0456'
                ),
                React.createElement(
                    'button',
                    { className: 'btn-repertoire', onClick: this.ChildCategory },
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
                    { className: 'main-name' },
                    '\u0420\u0415\u041F\u0415\u0420\u0422\u0423\u0410\u0420'
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
