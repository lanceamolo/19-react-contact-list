import React, { useState } from "react"
import usersJSON from "./users.json"
import UserInfo from "./UserInfo.js"
import { Link } from "react-router-dom"

function Home() {
  const [users, setUsers] = useState(usersJSON)

  return (
    <div id="homePage">
      <div id="myPeeps">
        <h1 id="peeps">My peeps</h1>
      </div>
      {users.map((item) => (
        <div className="contacts" id={"home" + item.id}>
          <Link to={"/UserInfo/" + item.id}>
            <img className="thumbnails" src={item.picture.thumbnail}></img>
            <h3 className="contactNames">
              {item.name.first} {item.name.last}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
