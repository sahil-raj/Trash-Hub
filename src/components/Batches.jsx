import React from 'react'
import Batch from './Batch'
import BatchHeader from './BatchHeader'
export default function Batches() {
  return (
    <div>
      <BatchHeader/>
      <Batch title="1"/>
      <Batch title="2" />
      <Batch title="3"/>
      <Batch title="4"/>
    </div>
  )
}
