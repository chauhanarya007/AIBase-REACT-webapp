import React from 'react'
import './Blog.css'
import Article from '../../components/Article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';


const Blog = () => (
  <div className="aibase__blog section__padding" id="blog">
    <div className="aibase__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="aibase__blog-container">
      <div className="aibase__blog-container_groupA">
        <Article imgUrl={blog01} date="May 26, 2023" text="AIBase and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="aibase__blog-container_groupB">
        <Article imgUrl={blog02} date="May 14, 2023" text="AIBase and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Feb 28, 2023" text="AIBase and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Jab 16, 2023" text="AIBase and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Feb 17, 2023" text="AIBase and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);
export default Blog