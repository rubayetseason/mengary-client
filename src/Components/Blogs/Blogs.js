import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs=[] } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
          const res = fetch("Article.json");
          const data = await (await res).json();
          return data;
        },
      });

    return (
        <div className='mb-10'>
            <p className='pt-10 text-center text-sm md:text-base text-red-700'>LATEST NEWS</p>
            <h2 className='mt-4 text-3xl lg:text-4xl font-semibold text-center'>Fashion New Trends</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-2 md:px-6'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;