import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import Footer from '../MainPage/Footer'
import NoResult from '../../assets/images/NoResult.png'
const FilterSearch = () => {
  return (
    <div className='plus-jakarta-sans'>
      <DashboardNavbar/>
      <div className='flex justify-center'>

         <div>


      <img src={NoResult} alt="" className='w-150 h-150' />
      <div className='transform -translate-y-30'>

 
      <h1 className='font-semibold text-3xl text-center'>No Results Found</h1>
      <h2 className='text-3xl mt-5 '>We can't find any items matching your search</h2>
           </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default FilterSearch
