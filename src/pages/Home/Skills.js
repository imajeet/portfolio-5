import React from 'react'
import Skill from './Skill'
import styled from 'styled-components'

import html5 from 'images/skills/html5.png'
import css3 from 'images/skills/css3.svg'
import js from 'images/skills/js.png'
import node from 'images/skills/node.png'
import react from 'images/skills/react.png'
import redux from 'images/skills/redux.png'
import angular from 'images/skills/angular.png'
import electron from 'images/skills/electron.png'
import webpack from 'images/skills/webpack.png'
import gulp from 'images/skills/gulp.jpg'
import git from 'images/skills/git.png'
import sass from 'images/skills/sass.png'
import aws from 'images/skills/aws.png'
import windows from 'images/skills/windows.png'
import mac from 'images/skills/mac.png'
import linux from 'images/skills/linux.png'
import cordova from 'images/skills/cordova.png'
import cc from 'images/skills/cc.png'

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`

const SkillWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkillImg = styled.img`
  width: 100%;
  display: block;
`

const skills = [
  html5,
  css3,
  js,
  node,
  react,
  redux,
  angular,
  electron,
  webpack,
  gulp,
  git,
  sass,
  aws,
  windows,
  mac,
  linux,
  cordova,
  cc,
]

const descriptions = {
  [html5]: 'I\'ve been working with HTML since high school. I have a solid understanding of the DOM and HTML5 elements including audio, video, and canvas.',
  [css3]: 'I\'ve been writing css just as long as I have been writing HTML. I am well versed in browser specific issues and features as well as animations and transitions.',
  [js]: 'I have been working heavily with JavaScript for many years now, and I believe it to be the strongest skill I possess and also the language I most enjoy working with.',
  [node]: 'Node gives me the freedom to accomplish almost anything I want while using the language I already know. I use it all the time for build tools and also as app servers for my side projects',
  [react]: 'I started using react for real at work, once I got into a real production level application, I fell in love with the library\'s structure and Syntax.',
  [redux]: 'I have worked with these state systems in the past and even written some of my own personal ones, but redux seems to nail the formula down and I love using it with react.',
  [angular]: 'I have the most experience with Angular 1.x than any other library, even surpassing jQuery. Had React not existd, I might be on board the Angular5 train.',
  [electron]: 'I have been following electron from the beginning and I love the idea of native desktop experiences that share the same source code. I have used it many times for my own personal projects.',
  [webpack]: '',
  [gulp]: '',
  [git]: '',
  [sass]: '',
  [aws]: '',
  [windows]: '',
  [mac]: '',
  [linux]: '',
  [cordova]: '',
  [cc]: '',
}


const Skills = () => {
  return (
    <SkillContainer>
      {
        skills.map((skill, index) => (
          <SkillWrapper key={index}>
            <Skill target={(<SkillImg src={skill} />)} description={descriptions[skill]} />
          </SkillWrapper>
        ))
      }
    </SkillContainer>
  )
}

export default Skills
