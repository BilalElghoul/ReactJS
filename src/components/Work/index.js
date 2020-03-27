import React, { Component } from "react";
import axios from 'axios';

import {
  WorkComponent,
  WorkTitle,
  SpanH2,
  Part,
  Icon,
  PartTitle,
  Line,
  PartDesc
} from "./style.js";

class Work extends Component {
  state = {
    works :[]
  }
  componentDidMount(){
    axios.get('data.json').then(res => {
      this.setState({
        works : res.data.works
      })
    })
  }

  render() {
    const {works} = this.state;
    const workList = works.map(workItem =>{
      return(

            <Part first={workItem.id} key={workItem.id}>
              <Icon className={'icon '+workItem.icon_name}></Icon>
              <PartTitle>{workItem.title}</PartTitle>
              <Line />
              <PartDesc>
                {workItem.body}
              </PartDesc>
            </Part>
      );
    });


    return (
      <div>
        <WorkComponent>
          <div className="container">
            <WorkTitle>
              <SpanH2>My</SpanH2> Work
            </WorkTitle>
            
              {workList}
          </div>
        </WorkComponent>
      </div>
    );
  }
}

export default Work;
