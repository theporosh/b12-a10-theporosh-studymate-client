import React from "react";

const Categories = () => (
  <section className="py-16 bg-base-200">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Subjects & Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {["Math", "Physics", "Chemistry", "Biology", "Computer Science", "English"].map((subject) => (
          <span key={subject} className="px-4 py-2 bg-primary text-primary-content rounded-full font-semibold shadow">
            {subject}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
