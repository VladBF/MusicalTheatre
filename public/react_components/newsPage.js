let React = require('react');
let AboutNew = require('./aboutNews').AboutNew;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const newsData = {
    NewInfo: [],

    get: function (name) {
        return this.NewInfo.filter(function (item) {
            return item.date === name;
        });
    }

};

(function () {
    $.ajax({
        url: '/newsList',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            newsParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function newsParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        newsData.NewInfo.push(result.result[i]);
    }
}

class AllNews extends React.Component {
    constructor(props) {
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'col-md-12 col-xs-12 col-sm-12 all-shows-container' },
            React.createElement(
                React.Fragment,
                null,
                newsData.NewInfo.map((item, i) => React.createElement(
                    Link,
                    { to: `/news/${item.date}`, key: i, onClick: this.UpScroll },
                    React.createElement(
                        'div',
                        { className: 'col-md-4 news-element' },
                        React.createElement(
                            'div',
                            { className: 'name-information-container' },
                            React.createElement(
                                'h3',
                                { className: 'name-information' },
                                item.name_information
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'img-news-container' },
                            React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-top-news' }),
                            React.createElement('img', { src: item.image_1, alt: '', className: 'img-news' })
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_8.png', alt: '', className: 'ornament-bottom-news' }),
                        React.createElement(
                            'div',
                            { className: 'date-news-container' },
                            React.createElement(
                                'h3',
                                { className: 'date-news' },
                                item.date
                            )
                        )
                    )
                ))
            )
        );
    }
}

class LookInfoAboutNew extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const News = newsData.get(this.props.match.params.look_new);
        return React.createElement(
            'div',
            { className: 'aboutShow-container', id: 'aboutShow-container' },
            React.createElement(AboutNew, { infoNews: News })
        );
    }

}

class News extends React.Component {
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
                    { className: 'main-name-news' },
                    '\u041D\u041E\u0412\u0418\u041D\u0418'
                ),
                React.createElement(
                    Switch,
                    null,
                    React.createElement(Route, { exact: true, path: '/news', component: AllNews }),
                    React.createElement(Route, { path: '/news/:look_new', component: LookInfoAboutNew })
                )
            )
        );
    }

}

module.exports.News = News;
