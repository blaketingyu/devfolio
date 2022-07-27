import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-bold text-gray-900 pb-1',
  title: 'text-md text-gray-600 font-semibold pb-3',
  description: 'list-item list-disc list-inside pb-1',
  point: 'text-md text-gray-600 font-light pb-2',
  technologies: 'text-md text-gray-600 font-light',
};

const ExperienceItem = ({ name, title, description, technologies}) => {
  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name}`}
      >
        {name}
      </h3>
      <p className={classes.title}>{title}</p>
      <ul className={classes.description}>
        {description.map((value, idx) => <li key={idx}>{value}</li>)}
      </ul> 
      {
        technologies && <p className={classes.technologies}><text className='text-md text-gray-600 font-semibold pb-1'>Technologies:</text> {technologies}</p>
      }
    </div>
  );
};

export default ExperienceItem;
