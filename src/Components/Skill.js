import React from "react";
import axios from "axios";

class Skill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            skills:[]
        }
    }
    componentDidMount() {
        axios({
            url:"https://ssekalegga-portfolio-backend.herokuapp.com/api/skill-links",
            method:"GET"
        })
            .then( (response) => {
                this.setState( {
                    skills : response.data
                })
            })
    }

    render() {
        const {skills} = this.state
        return (
            <section id="skills">
                <h2>Skills</h2>
                <div className="skills">
                    <div className="skills">
                        { skills.map(s => (
                            <div className={s.id} key={s.id + s.name} title={s.name}>
                                <img className="skill-img"
                                     src={s.image}
                                     alt={s.name}/>
                            </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
export default Skill
