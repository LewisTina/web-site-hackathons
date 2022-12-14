import Head from 'next/head'
import Image from 'next/image'
import '../styles/layout.module.scss'
import Layout from '../src/components/Layout'
import moment from 'moment';
import AgendaItem from '../src/components/Agenda';
import PassedEvent from '../src/components/Agenda/passedEvent';

interface AgendaItem{
  date: string
  hour: string
  eventName: string
  eventLocation: string
  eventDescription: string
  type: number
}

const muckedAgenda : AgendaItem[] =  [
  {date:"2022-10-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0 },
  {date:"2022-10-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2022-12-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2022-12-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0 },
  {date:"2022-10-10", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2023-01-30", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2022-10-30", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0 },
  {date:"2023-02-25", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2023-03-01", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1 },
  {date:"2023-01-18", hour:"18H", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0 }
]

const muckedAgendaPass =  [
  {date:"2022-10-10", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:0, photos:["diagonal-concept-vela-verde_14.jpg", "calendar.svg", "grid_point.svg", "objectivesConversation.svg"]},
  {date:"2022-10-10", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1, photos:["aboutLogo.svg", "calendar.svg", "grid_point.svg", "objectivesConversation.svg"] },
  {date:"2022-12-10", eventName:"Event Name", eventLocation:"Event Location", eventDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type:1, photos:["vercel.svg", "calendar.svg", "grid_point.svg", "objectivesConversation.svg"] },
]

let sortedAgenda = muckedAgenda.map(obj => { return { ...obj, date: new Date(obj.date) } })
.sort((a:any, b:any) => b.date - a.date).reverse()


let sortedAgendaPass = muckedAgendaPass.map(obj => { return { ...obj, date: new Date(obj.date) } })
.sort((a:any, b:any) => b.date - a.date).reverse()


export default function Home() {
  return (
    <Layout title='Evenements ·  BDE Estiam Lyon'>
      <div className="pageContent">
        <div className="fullAgenda">
          <div className="title">
            
          <h1>Evénements à venir</h1>
          </div>
      {
                sortedAgenda.map((item, index) =>(
                  <AgendaItem
                  key={index}
                  date={`${item.date}`}
                  hour={item.hour}
                  eventName={item.eventName}
                  eventLocation={item.eventLocation}
                  eventDescription={item.eventDescription}
                  type={item.type}
                  />
                ))
              }

            <div className="title">
            
            <h1>Evénements passés</h1>
            </div>

            {sortedAgendaPass.map((item, index) =>(
              <PassedEvent
              key = {index}
              date={`${item.date}`}
              eventName={item.eventName}
              eventLocation={item.eventLocation}
              eventDescription={item.eventDescription}
              type={item.type}
              photos={item.photos}

            />
            )
            )}
            
              
      </div>
      </div>
    </Layout>
  )
}
