import { useEffect, useState } from 'react';
import data from './data.json';
import { I2cAvatar } from '@webcomponents/i2cwebcomponents/dist/react';
import { SearchNormal1 } from 'iconsax-react';

const List = (props: any) => {

  //Code to fetch data from API
  const [agent, setAgent] = useState(data);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const filter = () => {
    const filterData = [...agent].sort((a, b) => a.name.localeCompare(b.name));
    setAgent(filterData);
  }

  const toggler = (e: any) => {
    console.log(e.target);
    return toggle == false ? setToggle(true) : setToggle(false);
  }

  useEffect(() => {
  }, [])

  return (
    <div className='agentList'>
      <div className="component-container">
        <div className="component-header">
          <div className="col-md-6">
            <h2>Available Agent(s)</h2>
          </div>
          <div className="col-md-6">

            <select className='select'>
              <option value="recent">Recent</option>
              <option value="alphabetically" onClick={filter}>Alphabetically</option>
            </select>

            {toggle == true ? <input className='input' type="text" placeholder="Search People" onChange={e => setSearch(e.target.value)} /> : <button onClick={toggler} className="btn"><SearchNormal1 /></button>}

          </div>
        </div>

        <table>
          <thead>
            <tr className='table-header'>
              <th>Name</th>
              <th>Shift Time</th>
              <th>Occ</th>
            </tr>
          </thead>
          <tbody>
            {agent.filter(agent => agent.name.toLowerCase().includes(search)).map((agent, index) => {
              return (
                <tr key={index} className="table-tr">
                  <td>
                    {agent.status ?

                      <div className="tooltip">
                        <div className="tooltiptext"> <span className='status online'></span> Available</div>
                        <I2cAvatar className="avatar" image={agent.image} label="Agent Image" />
                        <div className='status online'></div>
                      </div> :

                      <div className="tooltip">
                        <span className="tooltiptext"> <div className='status offline'></div> Offline</span>
                        <I2cAvatar className="avatar" image={agent.image} label="Agent Image" />
                        <div className='status offline'></div>
                      </div>}

                    {agent.name}

                  </td>
                  <td>{agent.from_date} - {agent.to_date}</td>
                  <td>{agent.occurenace}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default List;
