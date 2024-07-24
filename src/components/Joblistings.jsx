import jobs from '../jobs.json'

const Joblistings = () => {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {jobs.map((job)=>(
            <div className='bg-white  rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='mb-6'>
                    <div className='text-gray-600 my-2' >{job.type}</div>
                    <h3 className='text-xl font-bold'>{job.title}</h3>
                </div>
            </div>
        </div>
        ))
        }
    </div>
    
  )
}

export default Joblistings
