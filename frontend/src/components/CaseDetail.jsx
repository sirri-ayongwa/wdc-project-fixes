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
          {/* <div className='flex flex-row w-screen p-8 gap-4 '>
            <img
              className='w-2/5 h-1/2 rounded-2xl'
              src = {PICTURE}
              alt = "Michael Picture" 
            />
            <div className="w-3/4"> 
            <iframe src="https://www.slideshare.net/slideshow/embed_code/key/4CANGsyqn4SmlV?hostedIn=slideshare&page=upload" width="476px" height="288px" className="w-full h-full rounded-2xl" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            </div>
          </div> */}
                {/* Embedded SlideShare Presentation */}
                <div className="flex justify-center items-center w-full mt-8">
  <iframe
    src="https://www.slideshare.net/slideshow/embed_code/key/4CANGsyqn4SmlV?hostedIn=slideshare&page=upload"
    width="100%"
    height="720px"
    className="w-full max-w-screen-xl h-[720px] rounded-lg shadow-lg"
    frameBorder="0"
    allowFullScreen
  >
    This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
  </iframe>
</div>
          <RequestDemo />
        </Section>
    );
  };

  export default CaseDetail;