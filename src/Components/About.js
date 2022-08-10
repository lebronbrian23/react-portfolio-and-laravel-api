import React from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import parse from 'html-react-parser';

class About extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            about:''
        }
    }
    componentDidMount() {
        axios({
            url: "https://ssekalegga-portfolio-backend.herokuapp.com/api/content-blocks/about",
            method: "GET"
        }).then((response) =>{
            this.setState({
                about:response.data
            })
        })
    }

    render() {
        const {about} = this.state
        return(
            <section id="about">
                <h2 id="about-me">About me</h2>
                <div className="about-info">
                    <div className="profile-pic">
                        <figure>
                            <img className="profile-pic-figure" src={about.image} alt="picture of brian" />
                                <figcaption>Brian Ssekalegga</figcaption>
                        </figure>
                    </div>
                    <div className="about-desc">
                       {/* Displaying unescaped HTML data*/}
                        {
                            parse(DOMPurify.sanitize(
                                about.description, {
                                    USE_PROFILES: {
                                        html: true
                                    }
                                }
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}
export default About;
