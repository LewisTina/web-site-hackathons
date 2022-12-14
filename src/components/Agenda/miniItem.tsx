import moment from "moment"

interface AgendaItem{
    date: string
    hour: string
    eventName: string
    eventLocation: string
    eventDescription: string
    type: number
  }
  
  export default function AgendaMiniItem(props:AgendaItem) {
    const {date, hour, eventName, eventLocation, eventDescription, type} = props
  return (
      <div className='miniItem'
      style={{
        borderLeft: `${type == 0 ? "8px solid #FF006B" : "8px solid #000033"}`
      }}
      >

        <h1 className={`${type == 0 ? "secondaryC" : "secondaryDarkC"}`}>
        {moment(date).format('ddd DD-MM-YYYY')} - {hour}
        </h1>
        <p>
            <b>{eventName}</b> à {eventLocation}
        </p>
        <p className="pointInfos">
        {eventDescription}
        </p>

      </div>
  )
}
