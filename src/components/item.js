import React from 'react'
import Link from 'gatsby-link'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const Item = ({ project }) => (
  <div 
    className="item-outer"
    style={{
      flexGrow: getRandomInt(8),
      flexShrink: getRandomInt(8),
    }}
  >
    <div 
      className="item"
      style={{
        left: getRandomInt(6),
        top: getRandomInt(6),
        flexGrow: getRandomInt(8),
        flexShrink: getRandomInt(8),
      }}
    >
      <a
        className="item-client"
        href={project.url}
        style={{
          transform: `scaleY(${getRandomInt(2)})`
        }}
      >
        {project.client}
      </a>
      <p 
        className="item-title"
        style={{
          transform: `scaleY(${getRandomInt(2)})`
        }}
      >{project.title}</p>
      <p className="item-tagline">{project.tagline}</p>
    </div>
  </div>
)

export default Item
