import React from 'react'
import '../style/ProjectCard.css'

import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';


function ProjectCard({title,img,text,btn}) {

    // язык
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');
  // язык


  return (
    <div data-aos="flip-left" data-aos-duration="2000" className='project__card'>
        <img src={img} alt="" />
        <div className='pr2'>
          <div className='skils__grid'>
              <h3>
                React
              </h3>
              <h3>
                HTML
              </h3>
              <h3>
                CSS
              </h3>
              <h3>
                Java Script
              </h3>
          </div>
          <h2>
            {title}
          </h2>
          <p>
            {text}
          </p>
          <a href={btn}>
              {t('Live')}
          </a>
        </div>
    </div>
  )
}

export default ProjectCard