import React from 'react'
import { Button } from 'react-bootstrap'
import { Assets } from '../../assets'
import './Rules.css'
export const Rules = () => {
  return (
    <div className='rules-page'>
        <h2 className='rules-title'>Rules</h2>
        <h3 className='rules-content'> Click Here to Download the Rulebook</h3>
        <Button href={Assets.OpenHackRuleBook} target='_blank' className='rules-download reg-button'>Download</Button>
    </div>
  )
}
