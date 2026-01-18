import CompanionForm from '@/components/CompanionForm'

const NewCompanion = () => {
  return (
    <main className='flex flex-col items-center min-h-screen py-12 w-full'>
      <article className='w-full max-w-2xl px-4 flex flex-col gap-8'>
        <h1 className="text-3xl font-bold mb-4">Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion