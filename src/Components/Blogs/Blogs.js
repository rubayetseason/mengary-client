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
        <div>
            <div className='flex'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;