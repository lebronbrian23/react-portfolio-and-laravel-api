import React from "react";
import axios from "axios";

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            contacts:[]
        }
    }
    componentDidMount() {
        axios({
            url:"https://ssekalegga-portfolio-backend.herokuapp.com/api/social-media-links",
            method: "GET"
        }).then((response) =>{
            this.setState({
                contacts:response.data
            })
        })
    }

    render() {
        const {contacts} = this.state
        return(
            <section id="contact">
                <h2>Contact</h2>
                <div id="contact-me">
                    <div className="address">
                        { contacts.map( c => (
                            <div key={c.id+c.name}>
                                <a href={c.url} target="_blank">
                            <span>
                                <img className="social-media-icon"
                                     src={c.image}/>
                                {c.name}
                            </span>
                                </a>
                            </div>
                            )
                        )}

                    </div>
                </div>
            </section>
        )
    }
}
export default Contact;
