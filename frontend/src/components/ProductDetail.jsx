import { useParams, Navigate, Link } from 'react-router-dom';
import Section from './Section';
import Heading from './Heading';
import { products } from '../assets/data/products';
import RequestDemo from './requestDemo';
import  PICTURE  from '../assets/images/Michael_picture.jpeg'
import React, { useState } from 'react';

const ProductDetail = () => {
    const { productName } = useParams();
    const product = products.find(item=> item.title === productName);
    if (!product) {
        return <Navigate to="/404" />;
      }

    const [month, setMonth] = useState('November')

    const handleMonthChange = (selectedMonth) => {
      setMonth(selectedMonth);
    };

    const links = {
      November: 'https://public.tableau.com/views/WorldDisasterCentreReport/Overview?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      December: "",
      January: ""
    };
    
    return (
        <Section crosses>
        <div className=''>
          <Heading title={productName}  tag={`product`}
           text={product.description} 
          />

          <div className='flex flex-row p-8 m-8 mx-32 items-center justify-center gap-10'>
            <button 
              className={month == "November" ? 'text-xl px-8 py-2 bg-sky-500 rounded-lg' :'text-xl px-8 py-2 bg-sky-700 rounded-lg hover:bg-sky-500'}
              onClick={() => handleMonthChange('November')}
            >
              November 2024
            </button>
              
            <button 
              className={month == "December" ? 'text-xl px-8 py-2 bg-sky-500 rounded-lg' :'text-xl px-8 py-2 bg-sky-700 rounded-lg hover:bg-sky-500'}
              onClick={() => handleMonthChange('December')}
            >
              December 2024
            </button>

            <button 
              className={month == "January" ? 'text-xl px-8 py-2 bg-sky-500 rounded-lg' :'text-xl px-8 py-2 bg-sky-700 rounded-lg hover:bg-sky-500'}
              onClick={() => handleMonthChange('January')}
            >
              January 2025
            </button>
          </div>

        <div className='mx-16'>
          {links[month] == "" ?(
            <div className='rounded-xl border-8 w-full h-full pb-96 text-center text-3xl text-neutral-950 bg-white p-32'>
              Coming Soon
            </div>
          ):(
            <div className='rounded-xl border-8 w-full h-3/4'>
            <tableau-viz id="tableauViz"  
              src={links[month]}>
            </tableau-viz>
          </div>
          )}
          
        </div>

        </div>
        
       

        </Section>
    );
  };

  export default ProductDetail;