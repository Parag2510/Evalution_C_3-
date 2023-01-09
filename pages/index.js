
import Link from "next/Link";
//import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';
import Head from "next/head";

export default function Home(showdata) {
  return (
    <>
      <div>
        <div style={{display:"flex",width:"100%",height:"70px",border:"1 px solid teal",gap:"20%",alignItems:"center"}}>
          <p>Parag Sonje</p>
          <p><Link href="/Project">Project</Link></p>
          <p>Education</p>
        </div>
        <div style={{width:"15%",height:"800px",border:"1px solid white"}}>
          <img
          src="https://avatars.githubusercontent.com/u/107980794?s=400&u=1a665db0e002e3c3d92cd476d2a9fdcb988ed3c0&v=4"
          alt="img"
          width={"100px"}
          style={{borderRadius:"50%"}}
          />
          
          <h2>{showdata.name}</h2>
          <p style={{color:"grey"}}>{showdata.login}</p>
          <br/>
          <p>{showdata.bio}</p>

          <button><Link href="https://drive.google.com/file/d/12j00EHzDZ_M9qVBrPTSQzyg9hSjO-Z4S/view?usp=share_link">Resume</Link></button>
          <button><Link href="https://github.com/Parag2510">Follow</Link></button>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          width:"20%",
          border:"1px solid white",
        }}>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>TypeScript</p>
          <p>Redux</p>
          <p>NextJS</p>
          <p>Git</p>
          <p>Chakra ui</p>

        </div>
        <div style={{
          display:"grid",
          gridTemplateRows:"repeat(3,1fr)",
          width:"30%",
          border:"1px solid white"
        }}>

        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(){
  const profile=await fetch(`https://api.github.com/users/Parag2510`);
  const res=await profile.json();
  console.log(res);
  return{
    props:{
      showdata:res,
    },
  };
}
