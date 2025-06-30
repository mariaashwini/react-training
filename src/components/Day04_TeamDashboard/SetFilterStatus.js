import { useState } from "react";

export default function SetFilterStatus({teamInfo,setTeamInfo,currentFilter,setFilter}) {
  
        const setAllActive = () => {
         const updated =  teamInfo.map((member) => (
              {...member,status:'active'}
           ));
           setTeamInfo(updated);
        }

        const handleFilterChange = (e) => {
          setFilter(e.target.value);
        }
    
  return (
    <>
      <div className="toolbar-inline">
        <button className="primary-btn" onClick={setAllActive}>Set All to Active</button>

        <div className="filter-group">
          <label htmlFor="status-filter">Filter:</label>
          <select id="status-filter" className="status-select" value={currentFilter} onChange={handleFilterChange}>
            <option value="all">Show All</option>
            <option value="active">Active</option>
            <option value="offline">Offline</option>
            <option value="on-leave">On-leave</option>
          </select>
        </div>
      </div>
    </>
  );
}
