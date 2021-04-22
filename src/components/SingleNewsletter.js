import React from 'react'

export default function SingleNewsletter({ id, title, caption, thumbImageUrl }) {
  return (
    <div className="
  bg-red-900
  m-4
  flex-col 
  h-60 w-60
  border-solid
   border-2
 "
      key={id}>
      <img
        alt="thumbnail"
        className=" items-center h-24 w-24 m-4"
        src={`${thumbImageUrl}`} />
      <h1
        className="underline text-center">{`${title}`}</h1>
      <div className="m-2 text-xs">{`${caption}`}</div>
    </div>)
}
