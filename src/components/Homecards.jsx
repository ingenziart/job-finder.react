import Card from "./Card"


const Homecards = () => {
  return (
    <section className="py-4 ">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap- p-4 rounded-lg">

                <Card>
                <div className="card">
                   
                   <h1 className="text-black font-extrabold">for developer</h1>
                   <p className="text-black mt-2 mb-4"> browse our react job and start your carriel to day </p>
                   <a  className="rounded-full px-2 py-2 bg-black text-white hover:bg-indigo-600" href="">browse job</a>

               
              
              </div>
                </Card >
                <Card bg='bg-indigo-200'>
                 <div className="card2" >
                    <h1 className=" text-black font-extrabold">for emproyee</h1>
                    <p className="text-black mt-2 mb-4">list the job to find perfect developer</p>
                    <a  className="rounded-full px-2 py-2 bg-black text-white hover:bg-indigo-600" href="">add job</a>
                 </div>
                </Card>
                
            </div>

        </div>
    </section>
    
      
    
  )
}

export default Homecards
