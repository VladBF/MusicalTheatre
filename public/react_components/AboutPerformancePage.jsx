let React = require('react');






class AboutPerformance extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let data = this.props.infoShow;
        return(
            <div className="container main-homePage-container">
                <div className="row">
                    {/*<div className="main-image-perfomence">
                        <img src={"../"+data[0].image_main} alt="" className="image-main-play"/>
                    </div>*/}
                            <div className="name-play">
                                <img src={"../"+data[0].image_main} alt="" className="image-main-play"/>
                                <img src="../../image/ornament/ornament_11.png" alt="" className="ornament-name-play-left"/>
                                <img src="../../image/ornament/ornament_12.png" alt="" className="ornament-name-play-right"/>
                                <h1>{data[0].the_name_of_the_play}</h1>
                                <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-name-play"/>
                            </div>
                            <div className="play-author">
                                <h1>{data[0].author}</h1>
                                <img src="../../image/ornament/ornament_8.png" alt="" className="ornament-author-bottom"/>
                            </div>
                            <div className="container-play-genre">
                                <p className="play-genre">
                                    {data[0].genre_name}
                                </p>
                            </div>
                    <div className="people">
                        <p>
                            {data[0].staging_of_the_play_1}
                        </p>
                        <p>
                            {data[0].staging_of_the_play_2}
                        </p>
                        <p>
                            {data[0].staging_of_the_play_3}
                        </p>
                        <p>
                            {data[0].staging_of_the_play_4}
                        </p>
                        <p>
                            {data[0].staging_of_the_play_5}
                        </p>
                        <img src="../../image/ornament/ornament_1_2.png" alt="" className="ornament-people-bottom"/>
                    </div>
                            <div className="premiere">
                                <p>
                                    Прем'єра п'єси:
                                    {data[0].date_of_the_premiere}
                                </p>
                                <p className="duration">
                                    Тривалість:
                                    {data[0].duration}
                                </p>
                            </div>
                            <div className="container-play-description">
                                <img src="../../image/ornament/ornament_5_2.png" alt="" className="ornament-description-top"/>
                                <h1 className="play-description">{data[0].description_of_the_play}</h1>
                                <img src="../../image/ornament/ornament_5.png" alt="" className="ornament-description-bottom"/>
                            </div>
                        <div className="role-and-actors">
                            <h1 className="the-characters">Дійові особи :</h1>
                            <p>
                                {data[0].role_1}
                                {data[0].actor_name_1_id}
                            </p>
                            <p>
                                {data[0].role_2}
                                {data[0].actor_name_2_id}
                            </p>
                            <p>
                                {data[0].role_3}
                                {data[0].actor_name_3_id}
                            </p>
                            <p>
                                {data[0].role_4}
                                {data[0].actor_name_4_id}
                            </p>
                            <p>
                                {data[0].role_5}
                                {data[0].actor_name_5_id}
                            </p>
                            <p>
                                {data[0].role_6}
                                {data[0].actor_name_6_id}
                            </p>
                            <p>
                                {data[0].role_7}
                                {data[0].actor_name_7_id}
                            </p>
                            <p>
                                {data[0].role_8}
                                {data[0].actor_name_8_id}
                            </p>
                            <p>
                                {data[0].role_9}
                                {data[0].actor_name_9_id}
                            </p>
                            <p>
                                {data[0].role_10}
                                {data[0].actor_name_10_id}
                            </p>
                            <img src="../../image/ornament/ornament_1_2.png" alt="" className="ornament-actor-and-role-bottom"/>
                        </div>
                    <ul className="image-main-play-photo">
                        <li>
                            <img src={"../"+data[0].image_1} alt="" className="image-one"/>
                        </li>
                        <li>
                            <img src={"../"+data[0].image_2} alt="" className="image-one"/>
                        </li>
                        <li>
                            <img src={"../"+data[0].image_3} alt="" className="image-one"/>
                        </li>
                    </ul>
                    <ul className="image-main-play-photo">
                        <li>
                            <img src={"../"+data[0].image_4} alt="" className="image-one"/>
                        </li>
                        <li>
                            <img src={"../"+data[0].image_5} alt="" className="image-one"/>
                        </li>
                        <li>
                            <img src={"../"+data[0].image_6} alt="" className="image-one"/>
                        </li>
                    </ul>
                        <div>

                        </div>
                </div>
            </div>

        )
    }


}


module.exports.AboutPerformance = AboutPerformance;



