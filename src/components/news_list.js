import React from 'react';
import NewsItem from '../components/news_list_item';

const NewsList = (allnews) => {
  const items = allnews.news.map((item) => {
                  return(
                    <NewsItem key={item.id} item={item}/>
                  )  
                });
  
  return(
    <div>
      {items}
    </div>
  )
}
export default NewsList;