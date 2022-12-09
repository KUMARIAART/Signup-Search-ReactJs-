import { useState } from 'react';
import './App.css';
function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [AllData, setAllData] = useState([]);
  const [a2, seta1] = useState([])
  const [SerchItem,setSerchItem]=useState("")
  const [displayFiltered, setDisplayFiltered] = useState(false)
  return (
    <div>
      <h1>Signup And Serch Details</h1>
      <input id="serchbar"type="text" placeholder='Serch Any Iteam' required value={SerchItem} onChange={(e) => {
        setSerchItem(e.target.value)
      }} />
      <button onClick={() => {
        if (SerchItem.length > 4) {
          var a1 = []
          for (var i of AllData) {
            for (var j in i) {
              if (i[j] ===SerchItem) {
                a1.push(i)
                break
              }
            }
          }
          seta1(a1)
          setDisplayFiltered(true)
        }
        else{
          alert("Enter a string atleat length 4")
        }
      }}>Search</button><br/>
      <input type="text" placeholder='FirstName' required value={FirstName} onChange={(e) => {
        setFirstName(e.target.value)
      }} />
      <input type="text" placeholder='LastName' required value={LastName} onChange={(e) => {
        setLastName(e.target.value)
      }} />
      <input type="email" placeholder='Email' required value={Email} onChange={(e) => {
        setEmail(e.target.value)
      }} />
      <input type="password" placeholder='Password' required value={Password} onChange={(e) => {
        setPassword(e.target.value)
      }} />
      <button onClick={() => {
        let tempObj = {
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          password: Password
        }
        console.log(tempObj)
        setAllData([...AllData, tempObj])
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setDisplayFiltered(false)
      }}>Signup</button>
      {
        displayFiltered ? a2.map((item, index) => {
          return (
            <div>
              <table>
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              </table>
            </div>
          )
        }) :
          AllData.map((item, index) => {
            return (
              <div>
                <table>
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                </table>
              </div>
            )
          })
      }
    </div>
  )
}
export default Signup;