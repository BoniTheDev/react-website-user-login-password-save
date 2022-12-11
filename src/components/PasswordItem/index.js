import './index.css'

const websiteShortHandBgColors = [
  'blue',
  'green',
  'orange',
  'yellow',
  'silver',
  'red',
]
const PasswordItem = props => {
  const {passwordDetails, isShowPasswordChecked, onDeletePassword} = props
  const {id, websiteName, userName, password} = passwordDetails

  const websiteShortName = websiteName[0]
  const websiteShortNameUpper = websiteShortName.toUpperCase()

  const deleteEachPassword = () => {
    onDeletePassword(id)
  }

  const websiteStyle = `profile-name-in-short-card ${
    websiteShortHandBgColors[
      Math.ceil(Math.random() * websiteShortHandBgColors.length - 1)
    ]
  }`

  return (
    <li className="password-item">
      <div className={websiteStyle}>
        <p className="website-short-name">{websiteShortNameUpper}</p>
      </div>
      <div className="user-details-card">
        <p className="website-name">{websiteName}</p>
        <p className="user-name">{userName}</p>
        {isShowPasswordChecked ? (
          <p className="password-text">{password}</p>
        ) : (
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          </p>
        )}
      </div>
      <div className="btn-card">
        <button
          type="button"
          className="delete-btn"
          testid="delete"
          onClick={deleteEachPassword}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
