import './settings.css'

function Settings({ show, onClose, onNewGame}) {
    if (!show) return null;

    return (
        <div className="settings-overlay">
            <div className="settings-card">
                <h2 className="settings-title">Settings</h2>
                <button onClick={() => {
                    onClose();
                    onNewGame();
                }}>
                    New Game</button>
                <a onClick={onClose} className="settings-close-btn">x</a>
            </div>
        </div>
    )
}

export default Settings;