import React from 'react'

import Layout from '../components/layout'
import Section from '../components/section'
import {
  education,
  otherHonors,
  professionalExperience,
  technicalSkills,
} from '../constants/copy'

const yearsOfExperience = new Date().getFullYear() - 2013 // I started way back in 2012 as an intern, I'm ancient

const IndexPage = () => (
  <Layout>
    <>
      <div className="page-header">
        <h1>Hi, I'm Matt Dalzell</h1>
      </div>
      <p>
        I am a software engineer based out of Chicago, IL, with
        {` ${yearsOfExperience}`} years of professional experience in both
        frontend and backend web application development. Over the course of my
        career, I've worked on everything from large SaaS platforms to smaller
        apps for businesses across a variety of industries. Recently, I've been
        focusing on JavaScript development, primarily React web apps and native
        apps using frameworks such as Electron.
      </p>
      <p>
        My philosophy for software development is that the code is always
        improving, or it is always getting worse; there is no such thing as
        staying the same. I treat refactoring, bug fixing, and testing with the
        same care as I do writing new code. I enjoy the challenge of
        constructing code that is not only functional, but maintainable in the
        long run.
      </p>
      <Section sectionTitle="Technical Skills" subsections={technicalSkills} />
      <Section
        sectionTitle="Professional Experience"
        subsections={professionalExperience}
      />
      <Section sectionTitle="Education" subsections={education} />
      <Section sectionTitle="Other Honors" subsections={otherHonors} />
    </>
  </Layout>
)

export default IndexPage
