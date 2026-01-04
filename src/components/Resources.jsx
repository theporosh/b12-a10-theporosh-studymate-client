import React from "react";

const Resources = () => (
  <section className="py-16 bg-base-200">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Latest Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {["5 Tips to Study Effectively", "How to Choose a Study Partner", "Boost Motivation & Focus"].map((blog, i) => (
          <div key={i} className="p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{blog}</h3>
            <p className="text-gray-600">Learn how to enhance your learning experience with actionable tips.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Resources;
