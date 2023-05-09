import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
      <a href="Anivinder.pdf" className='btn' download={true}>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA