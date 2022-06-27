import React from 'react'
import { Container } from './styles';
import ResumeItem from '../ResumeItem';
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign } from 'react-icons/fa'


function Resume({ income, expense, total}) {
  return (
    <Container>
     <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleDown} value={income}/>
     <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleUp} value={expense}/>
     <ResumeItem title='Total' Icon={FaDollarSign} value={total}/>
    </Container>
  )
}

export default Resume;