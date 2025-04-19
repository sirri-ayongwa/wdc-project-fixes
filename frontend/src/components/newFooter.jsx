import React from 'react';
import WDCLogo from "../assets/images/wdclogobg.png";

const WDCFooter = () => {
  return (
    <footer className=" py-12 pt-16 ">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: WDC SYSTEMS */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">WDC SYSTEMS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Michael Overview</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Disaster Monitoring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Lifeline Platform</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Tectra Migration Tracker</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Argus Satellite System</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Eagle Drone Operations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Field Collector</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Crisis Atlas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">WDC Store</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Nova7 Resource Map</a></li>
            </ul>
          </div>

          {/* Column 2: COMMUNITY */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">COMMUNITY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">WDC Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Vision Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Industry Insights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Field Voices & Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">WDC Youth Network</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Events & Deployments</a></li>
            </ul>
          </div>

          {/* Column 3: UNDERSTANDING DISASTERS */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">UNDERSTANDING DISASTERS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">What Is Disaster Intelligence?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Disaster Types We Address</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Training & Capacity Building</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">WDC Academy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Impact Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">WDC Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">WDC Visuals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Video Briefings</a></li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">About WDC</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Join the Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Open Vision</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Partners & Collaborators</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Code of Ethics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Environmental & Sustainability Mission</a></li>
            </ul>
          </div>

          {/* Column 5: STRATEGIC ARENAS */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">STRATEGIC ARENAS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Disaster Risk Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Humanitarian Response</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Climate & Environmental Resilience</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Migration & Displacement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Disaster Finance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Public Health Crises</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Technology for Impact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Resilient Cities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Education</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 hover:underline">Equity & Inclusion</a></li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px bg-gray-300"></div>

        <div className="flex flex-wrap items-center justify-between">
          <div>
            <img src={WDCLogo} alt="World Disaster Center Logo" className="mb-3 max-w-[120px]" />
            <div className="flex gap-3">
              <a href="https://x.com/W_D_Center" className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 text-white hover:opacity-80">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/worlddisastercenter" className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-300 via-red-500 to-purple-700 text-white hover:opacity-80">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4.62C6.14 4.62 4.62 6.14 4.62 8C4.62 9.86 6.14 11.38 8 11.38C9.86 11.38 11.38 9.86 11.38 8C11.38 6.14 9.86 4.62 8 4.62ZM8 10.12C6.82 10.12 5.88 9.18 5.88 8C5.88 6.82 6.82 5.88 8 5.88C9.18 5.88 10.12 6.82 10.12 8C10.12 9.18 9.18 10.12 8 10.12Z" fill="white"/>
                  <path d="M11.5 5.06C11.9142 5.06 12.25 4.72421 12.25 4.31C12.25 3.89579 11.9142 3.56 11.5 3.56C11.0858 3.56 10.75 3.89579 10.75 4.31C10.75 4.72421 11.0858 5.06 11.5 5.06Z" fill="white"/>
                  <path d="M10.2 13.58H5.8C3.56 13.58 2.42 12.44 2.42 10.2V5.8C2.42 3.56 3.56 2.42 5.8 2.42H10.2C12.44 2.42 13.58 3.56 13.58 5.8V10.2C13.58 12.44 12.44 13.58 10.2 13.58ZM5.8 3.68C4.24 3.68 3.68 4.24 3.68 5.8V10.2C3.68 11.76 4.24 12.32 5.8 12.32H10.2C11.76 12.32 12.32 11.76 12.32 10.2V5.8C12.32 4.24 11.76 3.68 10.2 3.68H5.8Z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/UE5DJq9PdZdmejjC/?mibextid=qi2Omg" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white hover:opacity-80">
                <svg width="16" height="16" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/world-disaster-center" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white hover:opacity-80">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 2C13.7754 2 14.1993 2.17559 14.5118 2.48816C14.8244 2.80072 15 3.22464 15 3.66667V12.3333C15 12.7754 14.8244 13.1993 14.5118 13.5118C14.1993 13.8244 13.7754 14 13.3333 14H4.66667C4.22464 14 3.80072 13.8244 3.48816 13.5118C3.17559 13.1993 3 12.7754 3 12.3333V3.66667C3 3.22464 3.17559 2.80072 3.48816 2.48816C3.80072 2.17559 4.22464 2 4.66667 2H13.3333ZM13 12.3333V8.8C13 8.2182 12.7712 7.66058 12.364 7.25347C11.9568 6.84637 11.3992 6.61752 10.8173 6.61752C10.2467 6.61752 9.58667 6.96752 9.27333 7.49419V6.75333H7.528V12.3333H9.27333V9.072C9.27333 8.56 9.68267 8.14 10.1947 8.14C10.442 8.14 10.6794 8.23779 10.8544 8.41282C11.0295 8.58786 11.1273 8.82522 11.1273 9.07252V12.3333H13ZM5.94933 5.136C6.24323 5.136 6.52487 5.01947 6.73491 4.80943C6.94495 4.59939 7.06148 4.31774 7.06148 4.02385C7.06148 3.38752 6.58533 2.86733 5.94933 2.86733C5.65403 2.86733 5.37095 2.98459 5.15989 3.19565C4.94883 3.40671 4.83156 3.68979 4.83156 3.98508C4.83156 4.62142 5.353 5.136 5.94933 5.136ZM6.81733 12.3333V6.75333H5.08267V12.3333H6.81733Z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@WorldDisasterCenterOffice" className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white hover:opacity-80">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.9191 1.10651C14.558 1.27906 15.0602 1.78251 15.2299 2.42069C15.5388 3.57887 15.5388 5.99687 15.5388 5.99687C15.5388 5.99687 15.5388 8.41487 15.2299 9.57306C15.0578 10.2136 14.5556 10.7171 13.9191 10.8872C12.7638 11.1969 8.12875 11.1969 8.12875 11.1969C8.12875 11.1969 3.49603 11.1969 2.33844 10.8872C1.69952 10.7147 1.19735 10.2112 1.0276 9.57306C0.71875 8.41487 0.71875 5.99687 0.71875 5.99687C0.71875 5.99687 0.71875 3.57887 1.0276 2.42069C1.1997 1.78015 1.70188 1.27669 2.33844 1.10651C3.49603 0.796875 8.12875 0.796875 8.12875 0.796875C8.12875 0.796875 12.7638 0.796875 13.9191 1.10651ZM10.4981 5.99687L6.6481 8.22578V3.76796L10.4981 5.99687Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500 lg:mt-0">
            <a href="#" className="hover:text-blue-600 hover:underline">English (Global)</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Privacy</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Accessibility</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Legal</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Sitemap</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Trust Center</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Manage Cookies</a>
            <a href="#" className="hover:text-blue-600 hover:underline">Do Not Share My Personal Information</a>
          </div>
        </div>

        <div className="my-8 h-px bg-gray-300"></div>

        <div className="text-sm text-gray-500">
          <p>© 2025 World Disaster Center.</p>
        </div>
      </div>
    </footer>
  );
};

export default WDCFooter;