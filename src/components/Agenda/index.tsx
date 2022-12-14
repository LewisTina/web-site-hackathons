
import moment from 'moment';
interface agendaItem{
  date: string
  hour: string
  eventName: string
  eventLocation: string
  eventDescription: string
  type: number
}

export default function AgendaItem(props: agendaItem) {
  const {date, hour, eventName, eventLocation, eventDescription, type} = props
  return (
      <div className='AgendaItem'
      style={{
        borderBottom: `${type == 0 ? "8px solid #FF006B" : "8px solid #000033"}`
      }}
      >

        <h1 className={`${type == 0 ? "secondaryC" : "secondaryDarkC"}`}>
            {moment(date).format('ddd DD-MM-YYYY')} <br /> {hour}
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
