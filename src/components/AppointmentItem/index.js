import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {eachAppo, toggleStarred} = props
  const {title, date, isStarred, id} = eachAppo

  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const onClickStar = () => {
    toggleStarred(id)
  }

  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointItem-container">
      <div>
        <div className="title-star-container">
          <p className="title-heading">{title}</p>
          <img
            src={starImg}
            alt="star"
            className="star-img"
            onClick={onClickStar}
          />
        </div>
        <p className="date-text">{formattedDate}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
