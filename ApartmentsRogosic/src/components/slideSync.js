import React, { Component } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import style from "../styles/apartments.module.css"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "./image"

let photos = []

export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      isOpen: false,
      photoIndex: 0,
    }
    this.props.apart.map(edge =>
      photos.push(edge.node.childImageSharp.fluid.src)
    )
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
    photos = []
    this.props.apart.map(edge =>
      photos.push(edge.node.childImageSharp.fluid.src)
    )
  }
  handleClickImage = (e, index) => {
    e && e.preventDefault()
    this.setState({
      photoIndex: index,
      isOpen: true,
    })
  }
  render() {
    const isOpen = this.state.isOpen
    const photoIndex = this.state.photoIndex
    console.log("index: ", photoIndex)
    return (
      <div className={style.slider}>
        {/* <img src={this.props.apart[1].node.childImageSharp.fluid.src}></img> */}
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          infinite={true}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          adaptiveHeight={true}
          arrows={false}
          style={{ cursor: "pointer" }}
        >
          {this.props.apart.map((edge, index) => (
            <div onClick={e => this.handleClickImage(e, index)}>
              <Img fluid={edge.node.childImageSharp.fluid}></Img>
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          slidesToScroll={1}
          swipeToSlide={true}
          infinite={true}
          focusOnSelect={true}
          centerMode={true}
          dots={false}
          arrows={false}
          style={{ cursor: "pointer" }}
        >
          {this.props.apart.map(edge => (
            <div>
              <Img fluid={edge.node.childImageSharp.fluid}></Img>
            </div>
          ))}
        </Slider>
        {isOpen && (
          <Lightbox
            mainSrc={photos[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            nextSrc={photos[(photoIndex + 1) % photos.length]}
            prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + photos.length - 1) % photos.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % photos.length,
              })
            }
          />
        )}
      </div>
    )
  }
}
