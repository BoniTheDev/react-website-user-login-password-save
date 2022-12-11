import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    savedPasswordsList: [],
    websiteName: '',
    userName: '',
    password: '',
    searchInput: '',
  }

  onClickDeletePassword = id => {
    const {savedPasswordsList} = this.state

    const filteredPasswordList = savedPasswordsList.filter(
      eachPassword => id !== eachPassword.id,
    )

    this.setState({savedPasswordsList: filteredPasswordList})
  }

  getWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()

    const {websiteName, userName, password} = this.state

    const newSetPassword = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }

    this.setState(prevState => ({
      savedPasswordsList: [...prevState.savedPasswordsList, newSetPassword],
      websiteName: '',
      userName: '',
      password: '',
      isShowPasswordChecked: false,
    }))
  }

  onClickOnShowPassword = () => {
    const {isShowPasswordChecked} = this.state
    this.setState({isShowPasswordChecked: !isShowPasswordChecked})
  }

  render() {
    const {
      savedPasswordsList,

      websiteName,
      userName,
      password,
      isShowPasswordChecked,
      searchInput,
    } = this.state

    const passwordsCount = savedPasswordsList.length

    const searchResults = savedPasswordsList.filter(eachPassword =>
      eachPassword.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="app-logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="password-manager-top-container">
          <div className="set-password-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-logo"
            />
          </div>

          <form
            className="password-form-container"
            onSubmit={this.onAddPassword}
          >
            <h1 className="new-password-text">Add New password</h1>
            <div className="input-container">
              <label htmlFor="website" className="label-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
              </label>
              <input
                type="text"
                id="website"
                className="input-text"
                placeholder="Enter Website"
                value={websiteName}
                onChange={this.getWebsiteName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="username" className="label-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
              </label>
              <input
                type="text"
                id="username"
                className="input-text"
                placeholder="Enter Username"
                value={userName}
                onChange={this.getUserName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
              </label>
              <input
                type="password"
                id="password"
                className="input-text"
                placeholder="Enter Password"
                value={password}
                onChange={this.getPassword}
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
        <div className="password-manager-bottom-container">
          <div className="password-count-search-container">
            <div className="password-count-card">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="count-text">{passwordsCount}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.getSearchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-password-container">
            <input
              type="checkBox"
              id="showpasswords"
              className="checkbox"
              onClick={this.onClickOnShowPassword}
            />
            <label htmlFor="showpasswords" className="show-password">
              Show passwords
            </label>
          </div>
          <ul className="password-list">
            {passwordsCount === 0 ? (
              <div className="empty-password-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="empty-password-image"
                />
                <p className="no-password-text">No Passwords</p>
              </div>
            ) : (
              searchResults.map(eachPassword => (
                <PasswordItem
                  passwordDetails={eachPassword}
                  key={eachPassword.id}
                  isShowPasswordChecked={isShowPasswordChecked}
                  onDeletePassword={this.onClickDeletePassword}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
