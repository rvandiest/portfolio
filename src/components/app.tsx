import React, { Component, CSSProperties } from 'react';
import '../styles/main.css'
import '../styles/theme.css'
import '../styles/animations.css'
import '../styles/font_awesome/css/all.min.css'
import '../styles/customization.css'
import { Info } from './info';
import { WorkExperienceList, WorkExperience } from './workexperience'
import { EducationList, Education } from './education'
import { About } from './about'
import { SlideIn } from './animations'
import { Projects } from './projects';
import { SkillList, Skill, Topic } from './skills';
import { Navbar, NavbarItem, NavbarSubItem } from './navbar';
import { PageSwitcher } from './pageswitcher';
import { Page } from './page'

type AppProps = {}
type AppState = {
  currentpage: number,
  subpage: null | number
}
export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      currentpage: 0,
      subpage: null
    }
  }

  public render() {
    return (
      <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <SlideIn from='left' duration='1400ms'>
              <Info />
            </SlideIn>
            <br />
          </div>
          <div className="w3-twothird">
            <Navbar>
              <NavbarItem title='About me' onclick={() => { this.setState({ ...this.state, currentpage: 0, subpage: null }) }} />
              <NavbarItem title='My projects' onclick={() => { this.setState({ ...this.state, currentpage: 1, subpage: 0 }) }}>
                <NavbarSubItem title='CareKeeper' onclick={() => { this.setState({ ...this.state, currentpage: 1, subpage: 1 }) }} />
                <NavbarSubItem title='Intervention' onclick={() => { this.setState({ ...this.state, currentpage: 1, subpage: 2 }) }} />
              </NavbarItem>
              <NavbarItem title='Work Experience' onclick={() => { this.setState({ ...this.state, currentpage: 2, subpage: null }) }} />
              <NavbarItem title='Education' onclick={() => { this.setState({ ...this.state, currentpage: 3, subpage: null }) }} />
              <NavbarItem title='Skills' onclick={() => { this.setState({ ...this.state, currentpage: 4, subpage: null }) }} />
            </Navbar>
            <PageSwitcher currentpage={this.state.currentpage} subpage={this.state.subpage}>
              <Page id={0}>
                <SlideIn from='right' duration='1s'>
                  <About />
                </SlideIn>
              </Page>
              <Page id={1}>
                <Page id={0}>
                  <SlideIn from='right' duration='1s'>
                    <Projects />
                  </SlideIn>
                </Page>
                <Page id={1}>
                  <SlideIn from='right' duration='1s'>
                    <Projects />
                  </SlideIn>
                </Page>
                <Page id={2}>
                  <SlideIn from='right' duration='1s'>
                    <Projects />
                  </SlideIn>
                </Page>
              </Page>
              <Page id={2}>
                <SlideIn from='right' duration='1s'>
                  <WorkExperienceList>
                    <WorkExperience function={"Stagiar"}
                      company={"Sping BV"}
                      start={new Date('09-03-2018')}
                      end={new Date('02-15-2019')}
                      description={"Stagiar software engineering. In deze periode ervaring opgedaan met onder andere chatbots (Google Dialogflow), NodeJS en ReactJS."} />
                    <WorkExperience function={"Verkoopmedewerker"}
                      company={"Verduijn Cichlids"}
                      start={new Date('01-03-2015')}
                      end={new Date()}
                      description={"Bijbaan. Verkoop siervissen & toebehoren in aquariumspeciaalzaak."} />
                    <WorkExperience function={"Postbezorger"}
                      company={"SANDD Postverspreiders BV"}
                      start={new Date('03-01-2015')}
                      end={new Date('08-01-2015')}
                      description={"Bijbaan. Post sorteren en bezorgen"} />
                  </WorkExperienceList>
                </SlideIn>
              </Page>
              <Page id={3}>
                <SlideIn from='right' duration='1s'>
                  <EducationList>
                    <Education start={new Date('09-01-2017')}
                      end={new Date()}
                      location={"Hogeschool Rotterdam"}
                      degree={"Bachelor of Science"}
                      description={"Hoofdfase bachelor Informatica"} />
                    <Education start={new Date('09-01-2016')}
                      end={new Date('07-13-2017')}
                      location={"Hogeschool Rotterdam"}
                      degree={"Bachelor of Science"}
                      description={"Propedeuse bachelor Informatica"} />
                  </EducationList>
                </SlideIn>
              </Page>
              <Page id={4}>
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
            </PageSwitcher>
          </div>
        </div>
      </div>

    );
  }
}
