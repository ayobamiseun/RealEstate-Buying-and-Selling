import React from 'react'


export default function ListingItem({listing, id}) {
  return (<>
     <div>{listing.name} </div>
    <img src={listing.imgUrls} alt=""/>
  </>
  
  )
}
