import React from "react";

const Importance = () => {
  return (
    <div>
      <section className="mt-16 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-200">
              The Importance of Crowdfunding
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Crowdfunding has revolutionized fundraising for various projects
              and initiatives. Here's why it's so important:
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Importance Card 1 */}
            <div className="bg-[#1c1c24] p-6 rounded-lg shadow-md">
              <svg
                className="h-12 w-12 mx-auto text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-200">
                Access to Funding
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Crowdfunding provides an opportunity to access funding from a
                large number of individuals, potentially surpassing traditional
                funding sources. It enables creators, entrepreneurs, and
                organizations to bring their ideas to life.
              </p>
            </div>

            {/* Importance Card 2 */}
            <div className="bg-[#1c1c24] p-6 rounded-lg shadow-md">
              <svg
                className="h-12 w-12 mx-auto text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12l-4 4-4-4m4-4v14" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-200">
                Community Engagement
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Crowdfunding platforms foster community engagement and
                collaboration. They connect project creators with a passionate
                audience, allowing supporters to contribute and participate
                actively in initiatives they care about.
              </p>
            </div>

            {/* Importance Card 3 */}
            <div className="bg-[#1c1c24] p-6 rounded-lg shadow-md">
              <svg
                className="h-12 w-12 mx-auto text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-200">
                Validation and Feedback
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Crowdfunding allows project creators to validate their ideas and
                receive valuable feedback from the community. It serves as a
                platform for testing market demand and gauging interest before
                fully investing time and resources into a project.
              </p>
            </div>

            {/* Importance Card 4 */}
            <div className="bg-[#1c1c24] p-6 rounded-lg shadow-md">
              <svg
                className="h-12 w-12 mx-auto text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A10 10 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-200">
                Empowering Creativity
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Crowdfunding empowers creators, artists, and innovators to
                pursue their passions and bring their creative ideas to life. It
                provides a platform for showcasing unique projects and allows
                individuals to support and be part of the creative process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Importance;
