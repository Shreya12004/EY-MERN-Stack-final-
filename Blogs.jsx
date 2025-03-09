import React from 'react';
import Img1 from "../../assets/blogs/blog5.jpg";
import Img2 from "../../assets/blogs/blog6.jpg";
import Img3 from "../../assets/blogs/blog7.jpg";
import BlogCard from './BlogCard';

const BlogData = [
  {
    img: Img1,
    name: "Anil Kumar",
    description: "Assisted with setting up a new e-commerce website.",
    date: "January 16, 2023",
    helpedBy: "Rathod Tarun"
  },
  {
    img: Img2,
    name: "Meena Sharma",
    description: "Provided guidance on digital marketing strategies.",
    date: "September 10, 2022",
    helpedBy: "SSP"
  },
  {
    img: Img3,
    name: "Amit Patel",
    description: "Helped with troubleshooting software issues.",
    date: "August 15, 2005",
    helpedBy: "Modi ji"
  }
];

const Blogs = () => {
  return (
    <div className='pl-52'>
      <div className="container py-8">
        <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold'>Recently Helped People</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {BlogData.map((person, index) => (
            <BlogCard key={index} img={person.img} title={person.name} description={person.description} date={person.date} writer={person.helpedBy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
