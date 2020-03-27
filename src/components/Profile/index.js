import React, { Component} from 'react';
import axios from 'axios';
import {
  ProfileSkills,
  ProfileComponent,
  ProfileList,
  ProfileItem,
  SpanItem,
  SpanWeb,
  Skills,
  SkillsDesc,
  Bar,
  BarTitle,
  BarPercent,
  BarParent,
  BarDivSpan,
  PSTitle,
  PSTitleSpan
} from './style.js';

class Profile extends Component {
  state = {
    infoProfile : [],
    skills : []
  }
  
  componentDidMount  ()  {
    axios.get('data.json').then(response => {
        const data =  response.data.profile
        this.setState({
          infoProfile : data.info,
          skills      : data.skills 
        });
      })
    
  }


  getSkills = () => {
    // const inforPr = this.state.infoProfile;
    
  }

render(){
    const profiles = this.state.infoProfile
    const profilePanel = profiles.map(profile => {
        return(
                          <ProfileItem key={profile.id}>
                              <SpanItem>{profile.label}</SpanItem>
                               {profile.id === 6 ? (<SpanWeb>{profile.description}</SpanWeb>) :profile.description}
                          </ProfileItem>
        );
    })


    const skills = this.state.skills;
    const skillsPanel = skills.map(skill => {
          return (
                      <Bar key={skill.id}> 
                          <BarTitle>{skill.title}</BarTitle>
                          <BarPercent>{skill.percent}</BarPercent>
                          <BarParent>
                              <BarDivSpan percent = {skill.percent}></BarDivSpan>
                          </BarParent>
                      </Bar>
          );
    })

    
    return (
      <div >
        <ProfileSkills>
              <div className="container">
                  <ProfileComponent>
                      <PSTitle><PSTitleSpan>My </PSTitleSpan>Profile</PSTitle>
                      <ProfileList>
                          {profilePanel}
                      </ProfileList>
                  </ProfileComponent>
                  
                  <Skills>
                      <PSTitle>Some <PSTitleSpan>skills</PSTitleSpan></PSTitle>
                      <SkillsDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                      </SkillsDesc>
                      {skillsPanel}
                  </Skills>
                  
              </div>
          </ProfileSkills>
      </div>
    );
  }
}

export default Profile;
