import '@fortawesome/fontawesome-free/js/all'
import $ from 'jquery'
import jQuery from 'jquery'
import "bootstrap"
import "bootstrap/scss/bootstrap.scss"

import React, { Component } from 'react';
import { WorkExperienceList, WorkExperience } from './workexperience'
import { EducationList, Education } from './education'
import { About } from './about'
import { SlideIn } from './animations'
import { Projects } from './projects';
import { Hobbies } from './hobbies';
import { SkillList, Skill, Topic } from './skills';
import { Navbar, NavbarItem } from './navbar';
import { PageSwitcher } from './pageswitcher';
import { Page } from './page'
import { Chatbox } from './chatbox';

import '../styles/animations.css'
import '../styles/customization.css'

type AppProps = {}
type AppState = {
  currentpage: number,
}
export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      currentpage: 0
    }
  }

  public render() {
    return (
      <div className="container" style={{ maxWidth: 1400 }}>
        <div className='row justify-content-center mb-3 mt-5'>
          <h1>Robert van Diest</h1>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
          <Navbar>
            <NavbarItem title='About me' onclick={() => { this.setState({ ...this.state, currentpage: 0 }) }} />
            <NavbarItem title='Hobbies' onclick={() => { this.setState({ ...this.state, currentpage: 1 }) }} />
            <NavbarItem title='My projects' onclick={() => { this.setState({ ...this.state, currentpage: 2 }) }} />
            <NavbarItem title='Work Experience' onclick={() => { this.setState({ ...this.state, currentpage: 3 }) }} />
            <NavbarItem title='Education' onclick={() => { this.setState({ ...this.state, currentpage: 4 }) }} />
            <NavbarItem title='Skills' onclick={() => { this.setState({ ...this.state, currentpage: 5 }) }} />
            <NavbarItem title='Chatbot' onclick={() => { this.setState({ ...this.state, currentpage: 6 }) }} />
          </Navbar>
        </div>
        <div className="row">
          <PageSwitcher currentpage={this.state.currentpage}>
            <Page id={0} title={"About me"}>
              <SlideIn from='right' duration='1s'>
                <About />
              </SlideIn>
            </Page>
            <Page id={1} title={"Hobbies"}>
              <SlideIn from='right' duration='1s'>
                <Hobbies />
              </SlideIn>
            </Page>
            <Page id={2} title={"My projects"}>
              <SlideIn from='right' duration='1s'>
                <Projects />
              </SlideIn>
            </Page>
            <Page id={3} title={"Work Experience"}>
              <SlideIn from='right' duration='1s'>
                <WorkExperienceList>
                  <WorkExperience function={"Graduation intern"}
                    company={"OVSoftware BV"}
                    start={new Date('02-10-2020')}
                    end={new Date('07-14-2020')}
                    description={`At OVSoftware BV I completed my graduation internship. Research was a big component of this internship: I've researched
                    how to store resume data of IT-Professionals in a way that can be easily searched and give insight in the key skills of these professionals.
                    After the research I've implemented my findings in a application that combines a ASP.NET Core backend with an Angular frontend, and uses Elasticsearch as a search component.`}
                    reference={'Sylvia Straub'} />
                  <WorkExperience function={"Junior fullstack developer"}
                    company={"Rodium BV"}
                    start={new Date('05-22-2019')}
                    end={new Date('12-22-2019')}
                    description={`Rodium BV gave me the chance to work part time (10 hours a week) on their Human Resource Management 
                    product called Fit-To-Position. 
                    Here I've gained (more) backend development experience using PHP7 and the Laravel Framework, 
                    and also did some work on the front-end using ES8 and SASS.`}
                    reference={'Maurice Uijlenbroek'} />
                  <WorkExperience function={"Sales employee"}
                    company={"Verduijn Cichlids"}
                    start={new Date('01-03-2015')}
                    end={new Date('02-08-2020')}
                    description={"Sidejob. Retail of tropical fish and products."}
                    reference={'Catharina Verduijn'} />
                  <WorkExperience function={"Intern"}
                    company={"Sping BV"}
                    start={new Date('09-03-2018')}
                    end={new Date('02-15-2019')}
                    description={"Software engineering intern. During this period I've gained experience with chatbots (Google Dialogflow), NodeJS and ReactJS."}
                    reference={'Tom van de Geer'} />
                  <WorkExperience function={"Postal Delivery"}
                    company={"SANDD Postverspreiders BV"}
                    start={new Date('03-01-2014')}
                    end={new Date('08-01-2014')}
                    description={"Sidejob. Sorting mail and delivering."} />
                </WorkExperienceList>
              </SlideIn>
            </Page>
            <Page id={4} title={"Education"}>
              <SlideIn from='right' duration='1s'>
                <EducationList>
                  <Education start={new Date('09-04-2017')}
                    end={new Date('07-14-2020')}
                    location={"Hogeschool Rotterdam"}
                    degree={"Bachelor of Science"}
                    description={"Main phase bachelor Informatica"} />
                  <Education start={new Date('09-02-2019')}
                    end={new Date('02-07-2020')}
                    location={"Hogeschool Rotterdam"}
                    degree={"Minor"}
                    description={"Minor IT Innovatie voor Defensie & Veiligheid"}
                    grade={8.5} />
                  <Education start={new Date('02-25-2019')}
                    end={new Date('07-22-2019')}
                    location={"Hogeschool Rotterdam"}
                    degree={"Minor"}
                    description={"Minor Data Engineering"}
                    grade={7.3} />
                  <Education start={new Date('08-29-2016')}
                    end={new Date('07-14-2017')}
                    location={"Hogeschool Rotterdam"}
                    degree={"Bachelor propedeuse"}
                    description={"Propedeuse bachelor Informatica"}
                    grade={8.5} />
                </EducationList>
              </SlideIn>
            </Page>
            <Page id={5} title={"Skills"}>
              <SlideIn from='right' duration='1s'>
                <SkillList>
                  <Skill level={85} name={"C#"}>
                    <Topic name='ASP.NET' />
                    <Topic name='.NET Core' />
                    <Topic name='ASP.NET Core MVC' />
                    <Topic name='Unity' />
                    <Topic name='Xamarin' />
                    <Topic name='Entity Framework Core' />
                  </Skill>
                  <Skill level={85} name={"JavaScript"}>
                    <Topic name='ES8' />
                    <Topic name='TypeScript' />
                    <Topic name='ReactJS' />
                    <Topic name='Angular' />
                    <Topic name='VueJS' />
                    <Topic name='NodeJS' />
                  </Skill>
                  <Skill level={75} name={"SQL"}>
                    <Topic name='Postgresql' />
                    <Topic name='Oracle MySql' />
                  </Skill>
                  <Skill level={75} name={"NO-SQL"}>
                    <Topic name='MongoDB' />
                    <Topic name='Neo4J' />
                    <Topic name='Elasticsearch' />
                  </Skill>
                  <Skill level={75} name={"Python 3.6"}>
                    <Topic name='Django' />
                    <Topic name='Flask' />
                    <Topic name='Airflow' />
                  </Skill>
                  <Skill level={60} name={"Java"}>
                    <Topic name='JavaFX' />
                    <Topic name='Swing' />
                  </Skill>
                  <Skill level={60} name={"PHP"}>
                    <Topic name='PHP7' />
                    <Topic name='Laravel' />
                  </Skill>
                </SkillList>
              </SlideIn>
            </Page>
            <Page id={6} title={"Chatbot"}>
              <div className="row justify-content-center">
                <p style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>So far I've gained some experience with the development of chatbots. Below you can use a, very limited, showcase model.
                  Try to ask for my phone number, email, or just do some smalltalk!</p>
              </div>
              <div className="row justify-content-center">
                <SlideIn from='right' duration='1s'>
                  <Chatbox />
                </SlideIn>
              </div>
              <div className="row justify-content-center">
                <p style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}><i>I've realised this chatbot using <a href="https://www.dialogflow.com">Google Dialogflow</a> connected with a NodeJS backend.</i></p>
              </div>
            </Page>
          </PageSwitcher>
        </div>
      </div>

    );
  }
}
