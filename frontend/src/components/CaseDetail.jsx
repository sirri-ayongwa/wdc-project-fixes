import { useParams, Navigate } from 'react-router-dom';
import Section from './Section';
import Heading from './Heading';
import { caseStudies } from '../assets/data/case_stadies';
import RequestDemo from './requestDemo';
import  PICTURE  from '../assets/images/Michael_picture.jpeg'

const CaseDetail = () => {
    const { caseName } = useParams();
    const caseStudy = caseStudies.find(item=> item.title === caseName);
    if (!caseStudy) {
        return <Navigate to="/404" />;
      }
    return (
        <Section crosses>
        <div className='container '>
          <Heading title={caseName}  tag={` Case study`}
           text={caseStudy.description} 
          />
                  <div className="mt-4 flex justify-center">
          <a
            href="https://michael-v2-workshop.vercel.app/" // Replace with your specific URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
          >
            Try Now
          </a>
        </div>
          </div>
          <div className='flex flex-row w-screen p-8 gap-4 '>
            <img
              className='w-2/5 h-1/2 rounded-2xl'
              src = {PICTURE}
              alt = "Michael Picture" 
            />
            <div className="w-3/4"> 
            <iframe src="https://gtvault-my.sharepoint.com/personal/zakhtar8_gatech_edu/_layouts/15/Doc.aspx?sourcedoc={2c1a15b0-52ff-4adf-ac65-d61acd743203}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" className="w-full h-full rounded-2xl" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            </div>
          </div>
          <RequestDemo />
        </Section>
    );
  };

  export default CaseDetail;