import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function News() {
    const [news, setNews] = useState({
        newsTitle: "",
        newsDesc: "",
        newsImage: "",
        newsLink: "",
        newsSource: ""
    });

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-09-22&sortBy=popularity&apiKey=54780f5aab7c4df9a8ba208fbbc0b17d").then(
            (response) => {
                setNews({
                    newsTitle: response.data.articles[0].title,
                    newsDesc: response.data.articles[0].description,
                    newsImage: response.data.articles[0].urlToImage,
                    newsLink: response.data.articles[0].url,
                    newsSource: response.data.articles[0].source.name
                });
            }
        );
    });

    return (
        <div className='inline-block mt-12 mb-8 border-[2px] rounded-xl'>
            <div className='flex m-4'>
                <div className='inline-block w-3/4'>
                    <h2 className='text-[1.3rem] text-[#4e4e4e]'>{news.newsTitle}</h2>
                    <h6 className='text-xs font-medium text-[#888]'>{news.newsSource}</h6>
                    <h5 className='hidden lg:flex mx-2 my-3'>{news.newsDesc}</h5>
                    <a className='text-sky-500 font-medium' target='#' href={news.newsLink}>
                        <FontAwesomeIcon icon={faNewspaper} className='text-[#444]' /> View Full Coverage
                    </a>
                </div>
                <img className='h-full my-auto w-1/4 rounded-xl' src={news.newsImage} />
            </div>
        </div>
    );
}
