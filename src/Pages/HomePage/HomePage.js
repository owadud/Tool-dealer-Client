import React from 'react'
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Summary from './Summary';
import ToolItems from './ToolItems';


function HomePage() {
    return (
       <>
       <Banner/>
       <ToolItems/>
       <Summary/>
       <ExtraSection/>
       
       </>
    )
}

export default HomePage;
