import React from 'react';

const NewsItem = (item) => {
  return( <div>
            <h2>{item.item.title}</h2>
            <p>{item.item.feed}</p>
          </div>
  );
}

export default NewsItem;