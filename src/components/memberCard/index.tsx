interface memberCard{
    name: string
    grade: string
    functions: string
    remark: string
  }
  
  export default function MemberCard(props:memberCard) {
    const {name, grade, functions, remark,} = props
  return (
    <div className="scrollCard">
        <div className="memberPhoto">

        </div>

        <div className="memberInfos">
            <p>
                {remark}
            </p> <br />

            <p>
                {functions}
            </p>

            <p>
                {grade}
            </p>

            <h2>
                {name}
            </h2>

            
          <button className='button primary'>
            Contacter {name}
          </button>
        </div>

    </div>
  )
}
