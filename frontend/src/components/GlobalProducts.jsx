import React, {useState}  from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TagLine from "./Tagline";
import Section from './Section';
import Heading from './Heading';
import { caseStudies } from '../assets/data/products';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function CaseStudies() {
    
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);
  
    const currentItems = caseStudies.slice(
        (currentPage - 1) * itemsPerPage,
       currentPage * itemsPerPage
   );

  // Handle clicking on a page number
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Section crosses>
        <div className='container '>
          <Heading  title='What We Do'
          text={`
          Our Global Products are designed to enhance disaster resilience and preparedness worldwide. They leverage advanced analytics, real-time data, and collaborative platforms to empower decision-makers with actionable insights.`}
          tag={`Global Products`}
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {currentItems.map((item, index) => (
              <Link
                to={item.coming_soon ? '#' : `/cases/${item.title}`}
                key={index}
                href={item.link}
                className= "block min-h-60 bg-cover bg-center rounded-md overflow-hidden relative"
                style={{ backgroundImage: `url(${item.image})` }}
              >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                {item.coming_soon && (
                  <div className="absolute inset-0 flex items-center justify-center group bg-cover bg-center rounded-md overflow-hidden">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-sm bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      Coming Soon!
                    </div>
                  </div>
                )}

                <div className="text-lg font-semibold">{item.title}</div>
                <div className="mt-2 text-gray-300 line-clamp-2">{item.description}</div>
              </div>
                
              </Link>
            ))}
          </div>

    <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3  py-1 rounded ${
              currentPage === index + 1 ? 'bg-n-4 text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>


        </div>
    </Section>
  );
}
