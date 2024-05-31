import React from 'react'
import './projects.css'

import Procontainer from '../../containers/procontainer/Procontainer'

const Projects = () => {
  return (
    <section className='pf__projects' id='projects'>
      <div className='pf__projects-head'>
        <div className='pf__projects-head-sub-one'>
          Here are Some of my notable
        </div>
        <div className='pf__projects-head-sub-two'>
          Projects
        </div>
      </div>

      <div className='pf__projects-row-1'>
        <Procontainer title='Tamil Inscription Recognition' desc = 'Deep learning model that transcribes ancient tamil inscriptons from 10th century to modern tamil letters. It also involved using openCV to collect and build a dataset. This project was completed for Nithilam - a tamil research club.' git_link = "https://github.com/Siddhartha-Devan/Tamil-Epigraphs-data-creation-and-recognition" view_link = "https://www.kaggle.com/datasets/siddharthadevanv/8th-century-tamil-inscriptions" />
        <Procontainer title='Vision based dynamic QC system' desc = 'A  dynamic QC system was built using a 4k 60fps camera in order to precisely measure the dimensions of Brass bracket with very high precision (30 microns). The input was taken from a moving conveyor and was processed using various image processing techniques in opencv.' git_link = "https://github.com/Siddhartha-Devan/Dimension_Measurer" view_link = "https://dimension-measurer.streamlit.app/"/> 
        <Procontainer title= 'Indoor Fire Desmoking' desc = 'An AI based project that de-smokes real time smoky video frames and generates clear output in order to aid fire fighters in indoor fire hazards. It involved building a TF deep learning model that generates the gray scaled edges of the surrounding aiding in vision.' git_link = "https://github.com/Siddhartha-Devan" view_link = "https://www.youtube.com/watch?v=l6Hg9OsgXLA"/>
      </div>
      <div className='pf__projects-row-2'>
        {/* <Procontainer title = 'React UI Project' desc = 'In this is a react.js based UI development project. This project involved selecting a Figma design from the web and converting it into a full fledged responsive web site. This project was done in order to hone my front end dev skills'/> */}
        <Procontainer title = 'Feature Selection by Genetic Algorithm' desc = 'In this project, I have developed  an evolutionary algorithm for feature selection in Machine Learning. Here, the individuals with the best possible features are  allowed to produce further generations to select the best features from the data.' git_link = "https://github.com/Siddhartha-Devan/feature-selection-by-genetic-algorithm" view_link = "https://github.com/Siddhartha-Devan/feature-selection-by-genetic-algorithm"/>
        <Procontainer title='Deepfakes Video Classification' desc = 'A Video Classification model was trained on 300 videos to classify original and deep fake videos. The faces in the videos were cut out by using mediapipe and 3d convolution layers were used to extract the temporal information from the videos.' git_link = "https://github.com/Siddhartha-Devan/Deep_Fakes_Video_Classification" view_link = "https://deepfakesvideoclassification.streamlit.app/"/>
        <Procontainer title='Covid-19 Classification' desc = 'In this project the x-ray images of lungs are classified into 3 categories viz, covid positive, covid nagative and other non-covid diseases. Vgg-16 based model has been trained for this project using tensorflow. The UI for this project wwas developed using streamlit' git_link = "https://github.com/Siddhartha-Devan/Covid-19-classification-using-vgg16-and-streamlit" view_link = "https://covid-19-classification.streamlit.app/"/>
        
        {/* <Procontainer title = 'Toxic Comment Classification' desc = 'In this project, a dataset from a kaggle competition was used to classify if a comment is toxic or not using NLP and word vectorization. A vocab size of 200k and 32 different embeddings was used to build a multi layer LSTM using tensorflow'/> */}
      </div>

    </section>
  )
}

export default Projects
