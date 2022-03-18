import React from 'react'

function OverviewFailScreen({isFail}) {
    switch(isFail) {
      default: return null
      case false:
        return null;
      case true:
        return <div className="failDiv"></div>
    }
}

export default OverviewFailScreen