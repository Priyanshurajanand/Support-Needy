import React from 'react'

const Features = () => {
  return (
    <div>
        <section className="mt-16 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="text-center text-4xl font-extrabold tracking-tight  sm:text-2xl md:text-3xl text-blue-200 ">Some Features of this website</div>
            {/* Feature 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-10">
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4m-4 4h8" />
                </svg>
              </div>
              <div className="ml-4 text-gray-500">
                <h3 className="text-lg leading-6 font-medium text-gray-200">
                  Easy Fundraising
                </h3>
                <p className="mt-2 text-center text-gray-600">
                  Launching your campaign and accepting donations is a seamless
                  process. Our platform provides intuitive tools and a
                  user-friendly interface to make fundraising easy for you and
                  your supporters.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
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
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-200">
                  Secure Transactions
                </h3>
                <p className="mt-2 text-center text-gray-600">
                  We prioritize the security of all transactions made through
                  our platform. With advanced encryption and secure payment
                  gateways, you can trust that your donations are safe and
                  protected.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
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
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-200">
                  Amplify Your Reach
                </h3>
                <p className="mt-2 text-center text-gray-600">
                  Connect with a large community of passionate individuals ready
                  to support your cause. Share your campaign on this website to collect your fund for your initative.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l4-4-4-4m-4 4h8" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-200">
                  Transparent Reporting
                </h3>
                <p className="mt-2 text-center text-gray-600">
                  Gain insights into your campaign's performance with detailed
                  reporting and analytics. Track your donations, monitor
                  progress, and keep your supporters informed about the impact
                  they're making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features