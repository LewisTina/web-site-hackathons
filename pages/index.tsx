import Head from 'next/head'
import Image from 'next/image'
import '../styles/layout.module.scss'
import Layout from '../src/components/Layout'
import AgendaItem from '../src/components/Agenda'
import AgendaMiniItem from '../src/components/Agenda/miniItem'
import MemberCard from '../src/components/memberCard'
import { useRouter } from 'next/router';

interface AgendaItem{
  date: string
  hour: string
  eventName: string
  eventLocation: string
  eventDescription: string
  type: number
}

interface member{
  name: string
  grade: string
  functions: string
  remark: string
}

const muckedAgenda : AgendaItem[] =  [
  {date:"2022-10-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0 },
  {date:"2022-10-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2022-12-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2022-12-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0 },
]

const muckedMember : member[] = [
  {name: "Quentin RILLARD", grade: "Member's class", functions:"Member's function inside BDE", remark:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Salwa ADJAR", grade: "Member's class", functions:"Member's function inside BDE", remark:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "LT ABOUTOU", grade: "Member's class", functions:"Member's function inside BDE", remark:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  ]

export default function Home() {
  const router = useRouter()
  return (
    <Layout title='Acceuil ·  BDE Estiam Lyon'>
      <div className="cover">   
      <div className="topFilter absoluteBox">
        <div className="introText">
         <div>
         <h1 className='primaryC'>
          Un Bureau par nous pour nous...
          </h1>
          <button className='button primary'
          onClick={
            ()=>{
              router.push(`/about-bde`)
            }
          }
          >
            {"C'est quoi le BDE ?"}
          </button>
         </div>
        </div>

        <div className="showPoint">
          <div className="point">
            <div className="blockIcon secondaryDark">
              <span className="material-icons">
                paid
              </span>
            </div>
            <div className="pointText">
              <span className="pointTitle">
              {"Les Bons plans pour les étudiants"} <br />
              </span>
              
              <span className="pointInfos">
              {"Découvrez tous les bons plans dénichez pour vous et économisez des sous."}
              </span>
            </div>
          </div>

          
          <div className="point">
            <div className="blockIcon primary">
              <span className="material-icons">
              play_circle
              </span>
            </div>
            <div className="pointText">
              <span className="pointTitle">
              {"Activités Educatives"} <br />
              </span>
              
              <span className="pointInfos">
              {"Nous vous proposons des activités qui peuvent vous intéresser."}
              </span>
            </div>
          </div>

          
          <div className="point">
            <div className="blockIcon secondary">
              <span className="material-icons">
              nightlife
              </span>
            </div>
            <div className="pointText">
              <span className="pointTitle">
              {"Soirées Estudiantines"} <br />
              </span>
              
              <span className="pointInfos">
              {"Au delà des cours découvrez les différents événements organiser pour vous."}
              </span>
            </div>
          </div>



        </div>

        
      </div>
      </div>

      <section>
        <div className="image-paragraph absoluteBox">
          <div className="imageP  absoluteBox">
          <Image
          src="/aboutLogo.svg"
          alt="Logo BDE"
          fill/>
          </div>

          <div className="textP">
            <h1 className="primaryC">
            A propos du Logo
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
            Objectifs du BDE
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat distinctio, quasi aspernatur cupiditate maiores ipsum aliquam veniam necessitatibus fugiat assumenda quisquam a ab commodi consequuntur at aut, ullam repudiandae!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda voluptatibus officiis eligendi modi aspernatur numquam qui doloribus rem, ipsa fuga, nesciunt alias sed error, molestias corrupti iure quia eius!
            </p>
          </div>

          <div className="imageP  absoluteBox">
          <Image
          src="/objectivesConversation.svg"
          alt="Mockup conversation"
          fill/>
          </div>
          
        </div>
      </section>

      <section>
        <div className="agenda">
          <h1>
            AGENDA
          </h1>

          <div className="agendaContent">
            <div className="agendaItem">
              {
                muckedAgenda.map((item, index) =>(
                  <AgendaMiniItem
                  key={index}
                  date={item.date}
                  hour={item.hour}
                  eventName={item.eventName}
                  eventLocation={item.eventLocation}
                  eventDescription={item.eventDescription}
                  type={item.type}
                  />
                ))
              }
            </div>
            <div className="showMore">
              <div className="calendar">
              <Image
              src="/calendar.svg"
              alt="Mockup conversation"
              fill/>
              </div>

              
          <button className='button primary'
          onClick={
            ()=>{
              router.push(`/events`)
            }
          }>
            {"Voir plus"}
          </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      <div className="team">
          <h1 className='primaryC'>
            Equipe BDE
          </h1>

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

          
          <button className='button primary'
          onClick={
            ()=>{
              router.push(`/about-bde#team`)
            }
          }
          >
            {"Voir plus"}
          </button>
        </div>
      </section>
    </Layout>
  )
}
