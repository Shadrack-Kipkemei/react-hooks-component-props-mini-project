import React from 'react';


function Article ({title, date, preview, minutes}) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{date ? date : "Date not available"}</p>
      <p>{preview}</p>
      <p>{minutes} min read</p>
    </article>
  )
}

export default Article;
