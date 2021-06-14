import React from "react"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

function UserModal({ isOpen = false, handleClose, user }) {
  return (
    <Modal
      className="modal"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={isOpen}>
        <div className="modal__container">
          <div className="modal__close">
            <HighlightOffIcon onClick={handleClose} />
          </div>
          <Card className="modal__card">
            <div className="modal__imageWrapper">
              <CardMedia
                className="modal__image"
                image={user?.picture?.large}
                title="user"
              />
            </div>

            <CardContent>
              <Typography variant="h5">
                {`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Sex: {user?.gender}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Email: {user?.email}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Phone: {user?.cell}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Location: {user?.location?.city}, {user?.location?.country}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Fade>
    </Modal>
  )
}

export default UserModal
