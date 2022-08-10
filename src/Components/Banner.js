import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

class Banner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            banner:''
        };
    }
    componentDidMount() {
        axios({
            url:"https://ssekalegga-portfolio-backend.herokuapp.com/api/content-blocks/banner",
            method: "GET"
        }).then((response) =>{
                this.setState({
                    banner:response.data
                })
            });
    }

    render() {
        const { banner } = this.state;
        return(
            <section id="banner">
                <figure>
                    <img alt="a book , pencil and a cup of icecream next to a macbook" className="banner-image" src={banner.image} />
                </figure>
                <div id="banner-text">
                    {/* Displaying unescaped HTML data*/}
                    {
                        parse(DOMPurify.sanitize(
                                banner.description, {
                                    USE_PROFILES: {
                                        html: true
                                    }
                                }
                            )
                        )
                    }
                </div>
            </section>
        );
    }
}
export default Banner
