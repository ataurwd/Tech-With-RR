import React from 'react';

const NewsCard = ({post}) => {
    return (
        <div>
            <div key={post.id} className="card w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
                    <figure>
                        <img src={post.img} alt={post.title} className="rounded-t-lg w-full h-48 object-cover" />
                    </figure>
                    <div className="card-body p-5">
                        <h2 className="card-title text-xl font-bold">{post.title}</h2>
                        <p className="text-gray-700">{post.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500">Posted on: {post.post_date}</span>
                            <span className="text-sm text-gray-500">Views: {post.viewers}</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default NewsCard;