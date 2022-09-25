import React from 'react'
import { Dna } from  'react-loader-spinner'

export default function Loader() {
  return (
    <div>
        <Dna visible={true} height="300" width="300" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper"/>
    </div>
  )
}
