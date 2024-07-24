import jobs from '../jobs.json'

const Joblistings = () => {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {jobs.map((job)=>(
            <div className='bg-gray-200  rounded-xl shadow-md relative m-4'>
            <div className='p-4'>
                <div className='mb-6'>
                    <div className='text-gray-600 my-2' >{job.type}</div>
                    <h3 className='text-xl font-bold'>{job.title}</h3>
                    <p>{job.description}</p>
                    <p className='my-6 text-indigo-400'>{job.salary}</p>
                    <p className='text-xl text-orange-700 mb-3'>{job.location}</p>
                    <a href={`/job/${job.id}`} className='bg-indigo-500  hover:bg-indigo-600 text-white py-2 rounded-lg p-3 text-center text-sm h-36 w-16 mb-4' >read more</a>
                </div>
            </div>
        </div>
        ))
        }
    </div>
    
  )
}

export default Joblistings
