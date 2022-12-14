import Head from 'next/head'
import Image from 'next/image'
import '../styles/layout.module.scss'
import Layout from '../src/components/Layout'
import MemberCard from '../src/components/memberCard'

interface member{
  name: string
  grade: string
  functions: string
  remark: string
}


const muckedMember : member[] = [
  {name: "Quentin RILLARD", grade: "Member's class", functions:"Member's function inside BDE", remark:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Salwa ADJAR", grade: "Member's class", functions:"Member's function inside BDE", remark:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Member's name", grade: "Member's class", functions:"Member's function inside BDE", remark:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
]



export default function Home() {
  return (
    <Layout title="Qu'est ce que le BDE · BDE Estiam Lyon">
    <div className="pageContent">
      
    <div className="image-paragraph absoluteBox">
          <div className="imageP  absoluteBox">
          <Image
          src="/aboutLogo.svg"
          alt="Logo BDE"
          fill/>
          </div>

          <div className="textP">
            <h1 className="primaryC">
            {"C'est quoi un BDE ?"}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat distinctio, quasi aspernatur cupiditate maiores ipsum aliquam veniam necessitatibus fugiat assumenda quisquam a ab commodi consequuntur at aut, ullam repudiandae!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda voluptatibus officiis eligendi modi aspernatur numquam qui doloribus rem, ipsa fuga, nesciunt alias sed error, molestias corrupti iure quia eius!
            </p>
          </div>

        </div>

        
        <div className="image-paragraph absoluteBox">

          <div className="textP">
            <h1 className="primaryC">
            {"Notre BDE"}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat distinctio, quasi aspernatur cupiditate maiores ipsum aliquam veniam necessitatibus fugiat assumenda quisquam a ab commodi consequuntur at aut, ullam repudiandae!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda voluptatibus officiis eligendi modi aspernatur numquam qui doloribus rem, ipsa fuga, nesciunt alias sed error, molestias corrupti iure quia eius!
            </p>
          </div>

          <div className="imageP  absoluteBox">
          <Image
          src="/aboutLogo.svg"
          alt="Mockup conversation"
          fill/>
          </div>
          
        </div>

        
        <div className="image-paragraph absoluteBox">

        <div className="imageP  absoluteBox">
          <Image
          src="/aboutLogo.svg"
          alt="Mockup conversation"
          fill/>
          </div>

          <div className="textP">
            <h1 className="primaryC">
            {"Titre 03"}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat distinctio, quasi aspernatur cupiditate maiores ipsum aliquam veniam necessitatibus fugiat assumenda quisquam a ab commodi consequuntur at aut, ullam repudiandae!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda voluptatibus officiis eligendi modi aspernatur numquam qui doloribus rem, ipsa fuga, nesciunt alias sed error, molestias corrupti iure quia eius!
            </p>
          </div>
          
        </div>

        <div className="resume">
        <h1 className="primaryC">
            {"Résumé"}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat distinctio, quasi aspernatur cupiditate maiores ipsum aliquam veniam necessitatibus fugiat assumenda quisquam a ab commodi consequuntur at aut, ullam repudiandae!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda voluptatibus officiis eligendi modi aspernatur numquam qui doloribus rem, ipsa fuga, nesciunt alias sed error, molestias corrupti iure quia eius!
            </p>
        </div>

        <section className='team' id='team'>        
        <h1 className="primaryC">
            {"Notre Equipe"}
            </h1>

            <div className="teamSection">
            <h2 className="primaryC">
              {"Pôle Lorem 01"}
            </h2>
              

          <div className="scrollingView">
          {
                muckedMember.map((item, index) =>(
                  <MemberCard
                  key={index}
                  name={item.name}
                  functions={item.functions}
                  grade={item.grade}
                  remark={item.remark}
                  />
                ))
              }
          </div>
            </div>
            <div className="teamSection">
            <h2 className="primaryC">
              {"Pôle Lorem 02"}
            </h2>
              

          <div className="scrollingView">
          {
                muckedMember.map((item, index) =>(
                  <MemberCard
                  key={index}
                  name={item.name}
                  functions={item.functions}
                  grade={item.grade}
                  remark={item.remark}
                  />
                ))
              }
          </div>
            </div>
            <div className="teamSection">
            <h2 className="primaryC">
              {"Pôle Lorem 03"}
            </h2>
              

          <div className="scrollingView">
          {
                muckedMember.map((item, index) =>(
                  <MemberCard
                  key={index}
                  name={item.name}
                  functions={item.functions}
                  grade={item.grade}
                  remark={item.remark}
                  />
                ))
              }
          </div>
            </div>
        </section>
    </div>
    </Layout>
  )
}
