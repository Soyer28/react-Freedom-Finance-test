import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {
  loadNewsAsync,
  selectNews
} from './app/reducer';

function App() {
  let data = useAppSelector(selectNews);
  const dispatch = useAppDispatch();
  let listNews = data?.news;

  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(5);

  useEffect(() => {
    dispatch(loadNewsAsync())
  }, [])
  useEffect(() => {
    function filterDate() {
      let news = [...data?.news]
      news.sort((a: any, b: any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      data = news;
    }
    if(data?.news) filterDate();
  }, [data])

  const showMore = () => {
    setPage(page + 1)
  };

  listNews = listNews?.slice(0, perPage * page)

  return (
    <div className="App">
        {data?.news?.length > 0 ? listNews.map((item: any, i: number) => {
          return(
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item?.urlToImage ?
                <img src={item.urlToImage} alt=""/> : ''}
              <hr/>
            </div>
          )
        }) : ''}
      {(data?.news?.length > page * perPage) ? <button onClick={() => showMore()}>
        раскрыть еще
      </button> : ''}
    </div>
  );
}

export default App;
