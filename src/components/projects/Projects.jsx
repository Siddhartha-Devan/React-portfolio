import React from 'react'
import './projects.css'

import Procontainer from '../../containers/procontainer/Procontainer'

const Projects = () => {
  return (
    <div className='pf__projects' id='projects'>
      <div className='pf__projects-head'>
        <div className='pf__projects-head-sub-one'>
          Here are Some of my notable
        </div>
        <div className='pf__projects-head-sub-two'>
          Projects
        </div>
      </div>

      <div className='pf__projects-row-1'>
        <Procontainer title='Covid-19 Classification' desc = 'In this project the x-ray images of lungs are classified into 3 categories viz, covid positive, covid nagative and other non-covid diseases. Vgg-16 based model has been trained for this project using tensorflow. The UI for this project wwas developed using streamlit' />
        <Procontainer title='Tamil Inscriptions Transcriber' desc = 'Deep learning model that transcribes ancient tamil inscriptons from 10th century to modern tamil letters. It also involved using openCV to collect and build a dataset. This project was completed for Nithilam - a tamil research club.' />
        <Procontainer title= 'Indoor Fire Desmoking' desc = 'An AI based project that de-smokes real time smoky video frames and generates clear output in order to aid fire fighters in indoor fire hazards. It involved building a TF deep learning model that generates the gray scaled edges of the surrounding aiding in vision.'/>
      </div>
      <div className='pf__projects-row-2'>
        <Procontainer title = 'React UI Project' desc = 'In this is a react.js based UI development project. This project involved selecting a Figma design from the web and converting it into a full fledged responsive web site. This project was done in order to hone my front end dev skills'/>
        <Procontainer title = 'Feature Selection by Genetic Algorithm' desc = 'In this project, I have developed  an evolutionary algorithm for feature selection in Machine Learning. Here, the individuals with the best possible features are  allowed to produce further generations to select the best features from the data.'/>
        <Procontainer title = 'Emotion Detection' desc = 'In this project, a facial emotions dataset from kaggle was selected and it was used to develop a tensorflow based deep learning model that accurately classifies the emotions of the human faces into various classes like happy, sad, angry etc.'/>
      </div>

    </div>
  )
}

export default Projects
