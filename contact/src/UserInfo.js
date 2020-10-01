import React, { useState } from "react"
import usersJSON from "./users.json"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function UserInfo(props) {
  const [users, setUsers] = useState(usersJSON)

  const { id } = useParams()

  const chosenUser = users.find((item) => item.id == id)

  return (
    <div className="userInfo">
      <div className="contactInfo" id={chosenUser.id} key={chosenUser.id}>
        <div id="topHalfInfo">
          <Link to={"/"}>
            <div id="backArrow">&#8249;</div>
          </Link>
          <img className="bigPicture" src={chosenUser.picture.large} />
        </div>

        <div id="bottomHalfInfo">
          <h5 className="infoName">
            {chosenUser.name.first} {chosenUser.name.last}
          </h5>
          <h5 className="infoEmail">{chosenUser.email}</h5>
          <h5 className="infoNumber">{chosenUser.phone}</h5>
          <h5 className="infoLocation">
            {chosenUser.location.city}, {chosenUser.location.state}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
