import React from "react"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
}

export default class formSuccess extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "white"
    this.subtitle.style.margin = "0"
    this.subtitle.style.padding = "5%"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ backgroundColor: "#4a4ebb" }}>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              &#10004; Success
            </h2>
          </div>
          <div style={{ padding: "10px" }}>
            <p>Thank you for your reservation!</p>
            <p>We will get back to you as soon as possible.</p>
            <div
              style={{
                height: "70px",
                position: "relative",
              }}
            >
              <div
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button onClick={this.closeModal}>close</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
