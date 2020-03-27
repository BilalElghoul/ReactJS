import style from 'styled-components';

export const ProfileSkills = style.div`
  padding: 50px 0;
  overflow: hidden;
`

export const ProfileComponent =style.div`
  width: 50%;
  float: left;
  @media(max-width: 768px){
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`

export const ProfileList = style.ul`
  list-style: none;
`

export const ProfileItem = style.li`
  margin-bottom: 8px;
`

export const SpanItem = style.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`

export const SpanWeb  = style.span`
  font-weight: normal;
  color: #eb5424;
`

export const Skills = style.div`
  width: 50%;
  float: left;
  @media(max-width: 768px){
    width: 100%;
    float: none;
  }
`

export const SkillsDesc = style.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`

export const Bar =style.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`

export const BarTitle = style.span`
  float: left;
`

export const BarPercent = style.span`
  float: right;
  margin-right: 100px;
`

export const BarParent = style.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`

export const BarDivSpan = style.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width : ${props => props.percent}
`

export const PSTitle = style.h2`
  font-size: 40px;
  margin-bottom: 20px;
`

export const PSTitleSpan =style.span`
  font-weight: normal;
`