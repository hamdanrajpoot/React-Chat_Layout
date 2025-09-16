import React from 'react'

const SingleReview = ({comment,date,rating,reviewerName,reviewerEmail}
    
) => {
  return (
    <>
      <div className='mt-5'>
          <div className='flex'>
        {[...Array(Math.round(rating))].map((_, index)=>{
            return '⭐'
        })}
        </div>
        <p className="text-gray-400 text-sm">
            {reviewerName}
        </p>
        <p className="text-gray-600 text-sm">{comment}</p>
        <hr className="border-gray-300" />
      </div>
    </>
  )
}

export default SingleReview
