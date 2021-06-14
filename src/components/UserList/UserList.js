import React, { useState, useEffect } from "react"
import axios from "axios"

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  LinearProgress,
} from "@material-ui/core"

import UserModal from "./UserModal"
import "./UserList.css"

function UserList() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({})
  const [openModal, setOpenModal] = useState(false)

  // Fetch the users on initial render
  useEffect(() => {
    async function getUsers() {
      const result = await axios.get("https://randomuser.me/api/?results=5")
      if (result && result.data && result.data.results) {
        setUsers(result.data.results)
      }
    }

    getUsers()
  }, [])

  const onClickUser = (email) => {
    // Find the selected user
    const user = users.find((user) => user.email === email)

    setSelectedUser(user)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className="user">
      <Typography variant="h5">Users</Typography>
      <Divider />

      <List>
        {!users.length && <LinearProgress />}

        {users &&
          users.map(({ name, picture, email }, index) => (
            <div key={email}>
              <ListItem className="user__list">
                <ListItemAvatar>
                  <Avatar>
                    <img src={picture?.thumbnail} alt="user" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${name?.title} ${name?.first} ${name?.last}`}
                  secondary={email}
                  onClick={() => {
                    onClickUser(email)
                  }}
                />
              </ListItem>
              {index !== users.length - 1 && <Divider />}
            </div>
          ))}
      </List>

      <UserModal
        isOpen={openModal}
        handleClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  )
}

export default UserList
