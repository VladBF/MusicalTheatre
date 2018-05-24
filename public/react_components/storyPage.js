let React = require('react');

let storyData = [];

(function () {
    $.ajax({
        url: '/storyList',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            storyParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function storyParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        storyData.push(result.result[i]);
    }
}

class Story extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'div',
            { className: 'container history-main-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    { className: 'name-history' },
                    '\u0406\u0421\u0422\u041E\u0420\u0406\u042F \u0422\u0415\u0410\u0422\u0420\u0423'
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_5_2.png', alt: '', className: 'ornament-story-top' }),
                React.createElement(
                    'div',
                    { className: 'block-one' },
                    React.createElement(
                        'p',
                        { className: 'information-text' },
                        React.createElement('img', { src: storyData[0].image_3, alt: '\u0422\u043E\u0431\u0456\u043B\u0435\u0432\u0438\u0447\u0456', className: 'img-history-right' }),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_1
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_2
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_3
                        )
                    )
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-story-block' }),
                React.createElement(
                    'div',
                    { className: 'block-two' },
                    React.createElement(
                        'p',
                        { className: 'information-text' },
                        React.createElement('img', { src: storyData[0].image_1, alt: '\u0417\u0438\u043C\u043D\u0456\u0439 \u0442\u0435\u0430\u0442\u0440', className: 'img-history-left' }),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_4
                        )
                    )
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-story-block' }),
                React.createElement(
                    'div',
                    { className: 'block-three' },
                    React.createElement(
                        'p',
                        { className: 'information-text' },
                        React.createElement('img', { src: storyData[0].image_2, alt: '\u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439', className: 'img-history-right' }),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_5
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_6
                        )
                    )
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-story-block' }),
                React.createElement(
                    'div',
                    { className: 'block-four' },
                    React.createElement(
                        'p',
                        { className: 'information-text' },
                        React.createElement('img', { src: storyData[0].image_4, alt: '\u0410\u043C\u0430\u0442\u043E\u0440\u0438', className: 'img-history-left' }),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_7
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_8
                        )
                    )
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-story-block' }),
                React.createElement(
                    'div',
                    { className: 'block-six' },
                    React.createElement(
                        'p',
                        { className: 'information-text' },
                        React.createElement('img', { src: storyData[0].image_5, alt: '\u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439', className: 'img-history-right' }),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_9
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_10
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_11
                        )
                    )
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_9.png', alt: '', className: 'ornament-story-block' }),
                React.createElement(
                    'div',
                    { className: 'block-seven' },
                    React.createElement(
                        'p',
                        { className: 'information-text' },
                        React.createElement('img', { src: storyData[0].image_6, alt: '\u0422\u0440\u0443\u043F\u0430 \u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E', className: 'img-history-left' }),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_12
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_13
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_14
                        ),
                        React.createElement(
                            'h3',
                            { className: 'text-story' },
                            storyData[0].information_15
                        )
                    )
                ),
                React.createElement('img', { src: '../../image/ornament/ornament_5.png', alt: '', className: 'ornament-story-bottom' })
            )
        );
    }
}
module.exports.Story = Story;
