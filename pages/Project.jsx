import React from 'react'
const Project = (items) => {
    console.log(items)
  return (
    <div>
        <h1>Project</h1>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeate(2,1fr)",
            gap:"20px",
            padding:"0 20px",
        }}>
            {items.map((showdata)=>(
                <div key={showdata.id}
                style={{
                    border:"1px solid white",
                    padding:"15px",
                }}>
                <h3 style={{display:"flex",alignItems:"center",gap:"20px"}}>
                    {showdata.name}
                </h3>
                <p>{showdata.discription}</p> 
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",gap:"15px"}}>
                      <div>
        
                        {showdata.stargazers_count}
                      </div>

                      <div>
                        {showdata.forks}
                      </div>
                      <div>
                        {showdata.wtachers_count}
                      </div>

                      <div>
                        {showdata.visibility}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps(){
    const Profile=await fetch(`https://api.github.com/search/repositories?q=user:Parag2510+fork:true&sort=updated&per_page=10&type=Repositories`);
    const res=await Profile.json();
    return{props:{res}}
}

export default Project;