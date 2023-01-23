//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [projectname, setProjectName] = useState('');
  const [person, setPerson] = useState('');
  const [showData, setShowData] = useState(false);
  console.log(projectname,person);
  return (
    <div className="App" >
      <div>
      <h2>Project Management</h2> 
<table cellpadding="10" cellspacing="2" align="center">
<th class="row1">Project Name</th>
<tr>
<td class="col1">Project Name</td>
<td class="col2"><input type="text" placeholder="project name" onChange={(event)=> setProjectName(event.target.value)} /></td>
</tr>
<th class="row1">Assigned to</th>
<tr>
<td class="col1">Assigned to</td>
<td class="col2">
<select name="person" id="projectAssigned" onChange={(event)=>setPerson(event.target.value)}>
<option value="Er Merry Petision">Er Merry Petision</option>
<option value="Er Deepak Bhusan">Er Deepak Bhusan</option>
<option value="Er Robert Watson">Er Robert Watson</option>
</select>
</td>
</tr>
<th class="row1">Start Date</th>
<tr>
<td class="col1">Start Date</td>
<td class="col2"><input type="date" name="Start Date" id="SDate" class="startDate" /></td>
</tr>
<th class="row1">End Date</th>
<tr>
<td class="col1">End Date</td>
<td class="col2"><input type="date" name="End date" id="EDate" class="endDate" /></td>
</tr> 
<th class="row1">Priority</th>
<tr>
<td class="col1">Priority</td>
<td class="col2">
<input type="radio" name="priority" id="high" value="High"/> High
<input type="radio" name="priority" id="average" value="Average"/> Average
<input type="radio" name="priority" id="low" value="Low"/> Low
</td>
</tr>
<th class="row1">Description</th>
<tr>
<td class="col1">Description</td>
<td class="col2"><textarea name="description" id="description" cols="35" rows="4"></textarea></td>
</tr>
<tr colspan="2" align="center">
<td>
<button type="submit" class="submit1"  onClick={()=>setShowData(true)}>Submit</button>
</td>
<td>
{
  showData && <div>{projectname} is assigned to {person}</div>
  }</td>
</tr>
</table>
</div>
    </div>
  );
}

export default App;
