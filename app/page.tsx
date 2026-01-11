import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'


const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">popular Companions</h1>
      <section className="home-section">
        <CompanionCard
           id="1"
           name="Neura the Brainy Explorer"
           topic="Neural Network of the Brain"
           subject="science"
           duration={45}
           color="#E5D0FF"
           
        />
        <CompanionCard
          id="2"
           name="Countsy the Number Wizard"
           topic="Counting and Number Sense"
           subject="math"
           duration={45}
           color="#FFDA6E"/>
        <CompanionCard
          id="3"
           name="Verba the Vocabulary Builder"
           topic="Building a Strong Vocabulary"
           subject="language"
           duration={45}
           color="#BDE7FF"/>
        
      </section>

      <section className='home-section'>
      <CompanionList />
      <CTA />

      </section>
    </main>
  )
}

export default Page