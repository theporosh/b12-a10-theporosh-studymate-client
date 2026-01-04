import React from "react";

const FAQ = () => (
  <section className="py-16 bg-base-100">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="p-4 bg-base-200 rounded-lg">
          <summary className="font-semibold cursor-pointer">How do I find a study partner?</summary>
          <p className="mt-2 text-gray-600">Use our search and filter options to find partners based on subjects, location, or preferences.</p>
        </details>
        <details className="p-4 bg-base-200 rounded-lg">
          <summary className="font-semibold cursor-pointer">Is StudyMate free to use?</summary>
          <p className="mt-2 text-gray-600">Yes! All basic features are free. Premium features coming soon.</p>
        </details>
        <details className="p-4 bg-base-200 rounded-lg">
          <summary className="font-semibold cursor-pointer">Can I join multiple study groups?</summary>
          <p className="mt-2 text-gray-600">Absolutely. You can connect with multiple partners based on your interests.</p>
        </details>
      </div>
    </div>
  </section>
);

export default FAQ;
