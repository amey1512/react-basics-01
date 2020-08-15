import React from 'react';
import {css} from 'glamor';

const NewsItem = (item) => {
  
  let news_item_css = css({
    padding:'20px',
    boxSizing:'border-box',
    borderBottom:'2px solid black',
    fontFamily:'monospace',
    background:'lightblue',
    color:'grey',
          ':hover': {
              color:'black',
              background:'lightgrey'
          }
  })
  
  return( <div {...news_item_css}>
            <h2>{item.item.title}</h2>
            <p>{item.item.feed}</p>
          </div>
  );
}

export default NewsItem;