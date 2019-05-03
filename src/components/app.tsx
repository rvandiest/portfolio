import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/animations.css'
import '../styles/font_awesome/css/all.min.css'
import '../styles/customization.css'
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
                  <WorkExperience function={"Intern"}
                    company={"Sping BV"}
                    start={new Date('09-03-2018')}
                    end={new Date('02-15-2019')}
                    description={"Software engineering intern. During this period I've gained experience with chatbots (Google Dialogflow), NodeJS and ReactJS."} />
                  <WorkExperience function={"Sales employee"}
                    company={"Verduijn Cichlids"}
                    start={new Date('01-03-2015')}
                    end={new Date()}
                    description={"Sidejob. Retail of tropical fish and products."} />
                  <WorkExperience function={"Postal Delivery"}
                    company={"SANDD Postverspreiders BV"}
                    start={new Date('03-01-2015')}
                    end={new Date('08-01-2015')}
                    description={"Sidejob. Sorting mail and delivering."} />
                </WorkExperienceList>
              </SlideIn>
            </Page>
            <Page id={4} title={"Education"}>
              <SlideIn from='right' duration='1s'>
                <EducationList>
                  <Education start={new Date('09-01-2017')}
                    end={new Date()}
                    location={"Hogeschool Rotterdam"}
                    degree={"Bachelor of Science"}
                    description={"Main phase bachelor Informatica"} />
                  <Education start={new Date('09-01-2016')}
                    end={new Date('07-13-2017')}
                    location={"Hogeschool Rotterdam"}
                    degree={"Bachelor of Science"}
                    description={"Propedeuse bachelor Informatica"} />
                </EducationList>
              </SlideIn>
            </Page>
            <Page id={5} title={"Skills"}>
              <SlideIn from='right' duration='1s'>
                <SkillList>
                  <Skill level={85} name={"C#"}>
                    <Topic name='ASP.NET' />
                    <Topic name='.NET Core 2' />
                    <Topic name='ASP.NET Core MVC' />
                  </Skill>
                  <Skill level={80} name={"Python 3.6"}>
                    <Topic name='Django' />
                    <Topic name='Flask' />
                  </Skill>
                  <Skill level={80} name={"Java"}>
                    <Topic name='JavaFX' />
                    <Topic name='Hibernate' />
                    <Topic name='Swing' />
                  </Skill>
                  <Skill level={80} name={"JavaScript"}>
                    <Topic name='TypeScript' />
                    <Topic name='ReactJS' />
                    <Topic name='VueJS' />
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
