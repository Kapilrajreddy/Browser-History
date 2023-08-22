import './index.css'

function HistoryItem(props) {
  const {eachHistory, historyDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const handleDelete = () => {
    historyDelete(id)
  }

  return (
    <li className="history-item-container">
      <div className="history-item-sub-container">
        <div className="history-item-left-container">
          <p className="history-item-time">{timeAccessed}</p>
          <div className="history-item-left-sub-container">
            <img
              src={logoUrl}
              alt="domain logo"
              className="history-item-logo"
            />
            <div className="history-item-inside-container">
              <p className="history-item-title">{title}</p>
              <p className="history-item-url">{domainUrl}</p>
            </div>
          </div>
        </div>
        <div className="history-item-right-container">
          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem

/*
const HistoryItem = props => {
  const {HistoryDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <div className="browser-start">
        <p className="history-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img src={logoUrl} className="history-image" alt="domain logo" />
          <p className="history-title">{title}</p>
          <p className="history-url">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          type="button"
          onClick={onDelete}
          // testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
*/
