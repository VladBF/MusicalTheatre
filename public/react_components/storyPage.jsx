let React = require('react');

let storyData = [];

(function () {
    $.ajax({
        url:'/storyList',
        method:'GET',
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


function storyParser(result){
    for(let i = 0; i < result.result.length; i++){
        storyData.push(result.result[i]);
    }
}

class Story extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className='container history-main-container'>
                <div className="row">
                    <h1 className="name-history">ІСТОРІЯ ТЕАТРУ</h1>
                    <img src="../../image/ornament/ornament_5_2.png" alt="" className="ornament-story-top"/>
                    <div className="block-one">
                        <p className="information-text"><img src={storyData[0].image_3} alt="Тобілевичі" className="img-history-right"/>
                            <h3 className="text-story">{storyData[0].information}</h3>
                            <h3 className="text-story">{storyData[0].information_1}</h3>
                            <h3 className="text-story">{storyData[0].information_2}</h3>
                            <h3 className="text-story">{storyData[0].information_3}</h3>
                        </p>
                    </div>
                    <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-story-block"/>
                    <div className="block-two">
                        <p className="information-text"><img src={storyData[0].image_1} alt="Зимній театр" className="img-history-left"/>
                            <h3 className="text-story">{storyData[0].information_4}</h3>
                        </p>
                    </div>
                    <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-story-block"/>
                    <div className="block-three">
                        <p className="information-text"><img src={storyData[0].image_2} alt="Кропивницький" className="img-history-right"/>
                            <h3 className="text-story">{storyData[0].information_5}</h3>
                            <h3 className="text-story">{storyData[0].information_6}</h3>
                        </p>
                    </div>
                    <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-story-block"/>
                    <div className="block-four">
                        <p className="information-text"><img src={storyData[0].image_4} alt="Аматори" className="img-history-left"/>
                            <h3 className="text-story">{storyData[0].information_7}</h3>
                            <h3 className="text-story">{storyData[0].information_8}</h3>
                        </p>
                    </div>
                    <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-story-block"/>
                    <div className="block-six">
                        <p className="information-text"><img src={storyData[0].image_5} alt="Кропивницький" className="img-history-right"/>
                            <h3 className="text-story">{storyData[0].information_9}</h3>
                            <h3 className="text-story">{storyData[0].information_10}</h3>
                            <h3 className="text-story">{storyData[0].information_11}</h3>
                        </p>
                    </div>
                    <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-story-block"/>
                    <div className="block-seven">
                        <p className="information-text"><img src={storyData[0].image_6} alt="Трупа Кропивницького" className="img-history-left"/>
                            <h3 className="text-story">{storyData[0].information_12}</h3>
                            <h3 className="text-story">{storyData[0].information_13}</h3>
                            <h3 className="text-story">{storyData[0].information_14}</h3>
                            <h3 className="text-story">{storyData[0].information_15}</h3>
                        </p>
                    </div>
                    <img src="../../image/ornament/ornament_5.png" alt="" className="ornament-story-bottom"/>
                </div>
            </div>
        )

    }
}
module.exports.Story = Story;