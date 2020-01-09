import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      var certifications = this.props.data.certifications.map(function(certification){
        var logo = "images/"+certification.logo;
        return <div className="row" key={certification.name}>
          <div  className="nine columns main-col">
            <h3><a href={certification.url}  target="_blank">{certification.name}</a></h3>
            <p className="info">{certification.authority}<span>&bull;</span> <em className="date">{certification.date}</em></p>
          </div>
          <div  className="three columns">
            <a href={certification.url} target="_blank"><img className="profile-pic"  src={logo} alt={certification.name} /></a>
          </div>
        </div>
    })
    }

    return (
      <section id="resume">

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>EXPÉRIENCE</span></h1>
        </div>

        <div className="nine columns main-col">
        {work}
        </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Formation</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>
      <div className="row certifications">
        <div className="three columns header-col">
          <h1><span>Certifications</span></h1>
        </div>

        <div className="nine columns main-col">
        {certifications}
        </div>
      </div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Compétences</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
