import React from 'react'
import Link from 'gatsby-link'
import Item from '../components/item';

const projects = require('../data/projects.json');

const generateProjectsList = () => {
  const projectsList = [];
  for (let i = 0; i < projects.length; i++) {
    projectsList.push(
      <Item
        project={projects[i]}
      />
    )
  }
  return projectsList;
}

const IndexPage = () => (
  <div className="item-wrapper">
    {generateProjectsList()}
  </div>
)

export default IndexPage
