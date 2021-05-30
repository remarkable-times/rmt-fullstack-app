import React from 'react'

export default function SingleNewsletter({ id, title, caption, thumbImageUrl }) {
  return (
    <div className="single-newsletter-container"
      key={id}>
      <img
        alt="thumbnail"
        className="image-thumb"
        src={`${thumbImageUrl}`} />
      <h1
        className="title">{`${title}`}</h1>
      <div className="info">{`${caption}`}</div>
    </div>)
}
