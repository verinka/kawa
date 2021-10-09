import React, { useState } from 'react'
import PropTypes from 'prop-types'
import iconSet from '../img/selection.json'

function Icon(props) {
  const [size, setSize] = useState(props.size || '20');
  const [icon, setIcon] = useState(props.icon || 'telephone');
  const [color, setColor] = useState(props.color || 'white');
  function currentIcon() {
    const find = iconEl =>
      iconEl.properties.name.split(', ').includes(icon)
    return iconSet.icons.find(find)
  }
  function paths() {
      return currentIcon().icon.paths
  }
  return (
    <>
      <svg width={size} height={size} viewBox={'0 0 ' + (currentIcon().icon.width || '1024') + ' 1024'}
      xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle'}}
      >
        <g fill={color}>
          {paths().map((value,index)=> <path key={index} d={value} ></path>)}
        </g>
      </svg>
    </>)
}

export default Icon
