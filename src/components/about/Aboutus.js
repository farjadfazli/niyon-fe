import React from 'react';
import Person from './Person'
import './styles.scss';

function Aboutus() {
  const team = [
    {
      name: 'Carlos Banks',
      position: 'Frontend Developer',
      src: '/CB.jpeg',
      link: 'https://github.com/carlostbanks',
    },
    {
      name: 'Kenneth Brook',
      position: 'Frontend Developer',
      src: '/KB.jpeg',
      link: 'https://github.com/wombat1972',
    },
    {
      name: 'Farjad Fazli',
      position: 'Frontend Developer',
      src: '/FF.jpeg',
      link: 'https://github.com/farjadfazli',
    },
    {
      name: 'Tim Mitzen',
      position: 'Backend Developer',
      src: '/TM.jpeg',
      link: 'https://github.com/TimMitzen',
    },
    {
      name: 'Joe Thompson',
      position: 'Backend Developer',
      src: '/JT.jpeg',
      link: 'https://github.com/Joe-Thompson',
    },
    {
      name: 'Venky Yagatilee',
      position: 'Front Developer',
      src: '/VY.jpeg',
      link: 'https://github.com/vy3191',
    },
    {
      name: 'Carlos Villalpando',
      position: 'Project Manager',
      src: '/CV.jpeg',
      link: 'https://github.com/CarlosVillalpandoJr',
    },
  ];
  return (
      <div className="container" data-test="aboutUs-container">
        <h1>Meet the Crew</h1>
          <div className="team" data-test="team-container">
          {team.map(team => <Person key={team.name} {...team} />) }
          </div>
      </div>
  );
};

export default Aboutus;
