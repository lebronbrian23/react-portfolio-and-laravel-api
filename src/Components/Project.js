import React from "react";
import axios from "axios";

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios({
            url:"https://ssekalegga-portfolio-backend.herokuapp.com/api/projects",
            method:"GET"
        }).then((response) => {
            this.setState({
                projects:response.data
            })
        })
    }

    render() {
        const {projects} = this.state
        return (
            <section id="works">
                <h2>Works</h2>
                <div className="featured-works">
                    { projects.map( p => (
                        <div className={'work-' + p.id} key={p.id + p.name}>
                            <a href={p.url} target="_blank">
                                <figure id={'featured-work-'+p.id}>
                                    <img className="featured-work-image"
                                         src={p.image}
                                         alt={p.title + ' thumbnail'}/>
                                    <figcaption>{p.title} - {p.content}</figcaption>
                                </figure>
                            </a>

                        </div>
                        )
                    )}
                </div>
            </section>
        );
    }
}
export default Project;
