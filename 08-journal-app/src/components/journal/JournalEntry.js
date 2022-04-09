

export const JournalEntry = () => {
  return (
    <div className = "journal__entry pointer">
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images.unsplash.com/photo-1648828069553-85e5be33e1fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)'
            }}
        >
        </div>

        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo proyecto
            </p>
            <p className="journal__entry-content">
                Officia voluptate occaecat proident ex anim eiusmod culpa eiusmod et non.
            </p>
        </div>

        <div className="journal__entry-date-box">
            <span>Viernes</span>
            <h4>8</h4>
        </div>
    </div>
  )
}


