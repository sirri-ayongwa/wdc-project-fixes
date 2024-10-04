import React from "react";
import Heading from "./Heading";

function QNA() {
  return (
    <div>
      <Heading
        tag="Get started with World Disaster Center"
        title="What we offer"
        text="The World Disaster Center (WDC) offers a suite of services and solutions designed to enhance global disaster management and resilience. Our comprehensive approach not only addresses immediate disaster response needs but also focuses on long-term recovery and preparedness, ensuring communities worldwide are equipped to handle and thrive in the face of adversity. Here’s what we offer:"
      />
      <div className="space-y-4 container">
        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Advanced Disaster Prediction and Monitoring
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            <div>
              <li>
                Using AI and machine learning to analyze vast datasets for early
                detection and prediction of natural and man-made disasters.
              </li>
              <li>
                Providing real-time monitoring and alert systems that inform and
                prepare communities and governments ahead of potential threats.
              </li>
            </div>
          </div>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Data-Driven Decision Support Systems
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Offering robust decision support tools that integrate real-time
              data, historical analysis, and predictive insights to guide
              emergency response and resource allocation.
            </li>
            <li>
              Ensuring that humanitarian organizations, government agencies, and
              NGOs have access to the most accurate and actionable information.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Capacity Building and Training Programs
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Conducting workshops, seminars, and training sessions to build
              local capacities in disaster preparedness and risk reduction.
            </li>
            <li>
              Empowering community leaders, emergency responders, and volunteers
              with the knowledge and skills necessary to effectively manage
              disasters.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Innovative Technology Solutions
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Developing and deploying cutting-edge technologies, including
              drones for rapid assessment, IoT devices for environmental
              monitoring, and mobile applications for crisis communication.
            </li>
            <li>
              Enhancing the resilience of critical infrastructure through
              technological upgrades and innovative engineering solutions.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Global Policy Advocacy and Influence
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Engaging with policymakers at all levels to advocate for effective
              disaster risk management policies and investments.
            </li>
            <li>
              Influencing international standards and practices to ensure a
              proactive approach to disaster resilience and climate adaptation.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Humanitarian Aid Coordination
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Facilitating, under UN agencies and governments, coordinated
              response efforts through our global network, ensuring timely and
              effective distribution of aid and resources.
            </li>
            <li>
              Working with partners to streamline operations and logistics,
              minimizing delays and maximizing the impact of humanitarian
              assistance.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Research and Development
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Leading research initiatives to advance the science of disaster
              risk reduction and management.
            </li>
            <li>
              Collaborating with academic institutions and industry leaders to
              innovate and refine solutions that address the evolving landscape
              of global disasters.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Community Engagement and Resilience Programs
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Implementing programs that engage communities in
              resilience-building activities, ensuring they are active
              participants in their own preparedness strategies.
            </li>
            <li>
              Promoting sustainable practices and resilience through
              community-led projects and initiatives.
            </li>
          </p>
        </details>

        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Strategic Partnerships
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <li>
              Building strategic alliances with key stakeholders across sectors
              to leverage collective expertise and resources.
            </li>
            <li>
              Cultivating a network of collaboration that enhances our global
              reach and amplifies our impact.
            </li>
          </p>
        </details>
      </div>
      <br />
      <br />
      <br />
      <div className="m-2">
        <div className="flex justify-center">
          <Heading title="Our Catalogue" />
        </div>
        <div
          style={{
            position: "relative",
            paddingTop: "max(60%,326px)",
            height: "0",
            width: "100%",
          }}
        >
          <iframe
            allow="clipboard-write"
            sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            style={{
              position: "absolute",
              border: "none",
              width: "100%",
              height: "100%",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
            }}
            src="https://e.issuu.com/embed.html?d=wdc_008_bleu_format&u=sapiensndat"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default QNA;
