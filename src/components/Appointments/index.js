import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentList = []
class Appointments extends Component {
  state = {
    title: '',
    date: '',
    AppointmentList: initialAppointmentList,
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      title,
      date,
      id: uuidv4(),
      isStarred: false,
    }
    this.setState(prevState => ({
      AppointmentList: [...prevState.AppointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleStarred = id => {
    this.setState(prevState => ({
      AppointmentList: prevState.AppointmentList.map(eachAppo => {
        if (id === eachAppo.id) {
          return {...eachAppo, isStarred: !eachAppo.isStarred}
        }
        return eachAppo
      }),
    }))
  }

  StarredItems = () => {
    const {AppointmentList} = this.state
    const StarredItems = AppointmentList.filter(
      eachAppo => eachAppo.isStarred === true,
    )
    this.setState({AppointmentList: StarredItems})
  }

  render() {
    const {title, date, AppointmentList} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="input-img-container">
            <form onSubmit={this.onAdd} className="form-container">
              <label htmlFor="TitleInput" className="label">
                TITLE
              </label>
              <input
                type="text"
                placeholder="Title"
                className="title-input"
                id="TitleInput"
                onChange={this.onTitleChange}
                value={title}
              />
              <label htmlFor="DateInput" className="label">
                DATE
              </label>
              <input
                type="date"
                className="title-input"
                id="DateInput"
                onChange={this.onDateChange}
                value={date}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="input-img-container">
            <p className="main-heading">Appointments</p>
            <button
              type="button"
              className="starred-btn"
              onClick={this.StarredItems}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-container">
            {AppointmentList.map(eachAppo => (
              <AppointmentItem
                eachAppo={eachAppo}
                key={eachAppo.id}
                toggleStarred={this.toggleStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
