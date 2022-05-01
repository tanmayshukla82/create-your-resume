import React from 'react'

function Resume() {
  return (
        <div>
            <div className={'name-section'}>
                <p className={'center contact-name text-upper' }></p>
                <p className={'center address'}></p>
                <p className={'center'}></p>
                <p className={'center'}></p>
            </div>

            <div className={'profSummSection text-upper'}>                   
                <p className="heading bold">PROFESSIONAL SUMMARY</p>
                    <div className={'divider'}></div>
                    <p></p>
            </div>

            <div className={'educationSection text-upper'}>                   
                <p className="heading bold">EDUCATIONAL DETAILS</p>
                    <div className={'divider'}></div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
            </div>
          
        </div>
  )
}

export default Resume