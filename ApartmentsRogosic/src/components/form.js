import "../styles/formik-demo.css"
import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import classnames from "classnames"
import { useTranslation } from "react-i18next"
import { withTrans } from "../i18n/withTrans"
import WithTranslateFormErrors from "../i18n/useTranslateFormErrors"
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

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error,
    },
    className
  )
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}
const TextArea = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error,
    },
    className
  )
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <textarea
        id={id}
        name={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        cols="40"
        rows="5"
        {...props}
      ></textarea>
      <InputFeedback error={error} />
    </div>
  )
}
const Select = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error,
    },
    className
  )
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <select
        id={id}
        name={id}
        className="text-input mySelect"
        type={type}
        value={value}
        onBlur={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}

class App extends React.Component {
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
    // const { t } = useTranslation()
    return (
      <div className="app">
        <Formik
          user={{
            email: "",
            firstName: "",
            lastName: "",
            personNum: "",
            childrenNum: "",
            date: "",
            date2: "",
            apartmentNum: "",
            comment: "",
          }}
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            personNum: "",
            childrenNum: "",
            date: "",
            date2: "",
            apartmentNum: "",
            comment: "",
            "bot-field": "",
            "form-name": "booking",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .strict(true)
              .min(2, this.props.t("form.firstNameMin"))
              .required(this.props.t("form.firstNameReq")),
            lastName: Yup.string()
              .min(2, this.props.t("form.lastNameMin"))
              .required(this.props.t("form.lastNameReq")),
            email: Yup.string()
              .email(this.props.t("form.emailError"))
              .required(this.props.t("form.emailReq")),
            personNum: Yup.number()
              .min(1, this.props.t("form.personNumMin"))
              .max(20, this.props.t("form.personNumMax"))
              .required(this.props.t("form.personNumReq")),
            childrenNum: Yup.number()
              .min(0, this.props.t("form.personNumMin"))
              .max(20, this.props.t("form.childrenNumMax")),
            date: Yup.date()
              .min(new Date(), this.props.t("form.startDateLow"))
              .required(this.props.t("form.dateReq")),
            date2: Yup.date()
              .required(this.props.t("form.dateReq"))
              .min(Yup.ref("date"), this.props.t("form.endDateLess")),
            apartmentNum: Yup.number()
              .required(this.props.t("form.apartmentReq"))
              .min(0, this.props.t("form.apartmentMin"))
              .max(5, this.props.t("form.apartmentMax")),
            comment: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            fetch("/?no-cache=1", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "booking", ...values }),
            })
              .then(() => {
                console.log("in then")
                // alert("Good job")
                // <PopUp />
                this.openModal()
                console.log("After popup")
              })
              .catch(() => {
                alert("Error")
              })
              .finally(() => setSubmitting(false))
            setSubmitting(false)
          }}
          mapPropsToValues={({ user }) => ({
            ...user,
          })}
          displayName="myForm"
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              isSubmitting,
              setFieldTouched,
              setFieldValue,
            } = props
            return (
              <WithTranslateFormErrors
                errors={errors}
                touched={touched}
                setFieldTouched={setFieldTouched}
              >
                <form
                  onSubmit={handleSubmit}
                  name="booking"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/pages/formSuccess"
                >
                  <input type="hidden" name="form-name" value="booking" />
                  {/* <input name="bot-field" type="hidden" /> */}
                  <TextInput
                    id="firstName"
                    type="text"
                    label={this.props.t("form.firstName")}
                    placeholder={this.props.t("form.firstNamePlaceholder")}
                    error={touched.firstName && errors.firstName}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextInput
                    id="lastName"
                    type="text"
                    label={this.props.t("form.lastName")}
                    placeholder={this.props.t("form.lastNamePlaceholder")}
                    error={touched.lastName && errors.lastName}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextInput
                    id="email"
                    type="email"
                    label={this.props.t("form.email")}
                    placeholder={this.props.t("form.emailPlaceholder")}
                    error={touched.email && errors.email}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextInput
                    id="personNum"
                    type="number"
                    label={this.props.t("form.personNum")}
                    placeholder={this.props.t("form.personNumPlaceholder")}
                    error={touched.personNum && errors.personNum}
                    value={values.personNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onWheel={event => {
                      event.preventDefault()
                    }}
                  />
                  <TextInput
                    id="childrenNum"
                    type="number"
                    label={this.props.t("form.childrenNum")}
                    placeholder={this.props.t("form.childrenNumPlaceholder")}
                    error={touched.childrenNum && errors.childrenNum}
                    value={values.childrenNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onWheel={event => {
                      event.preventDefault()
                    }}
                  />
                  <TextInput
                    id="date"
                    type="date"
                    label={this.props.t("form.dateArrival")}
                    placeholder={this.props.t("form.date1Placeholder")}
                    error={touched.date && errors.date}
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextInput
                    id="date2"
                    type="date"
                    label={this.props.t("form.dateDeparture")}
                    placeholder={this.props.t("form.date2Placeholder")}
                    error={touched.date2 && errors.date2}
                    value={values.date2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextInput
                    id="apartmentNum"
                    type="number"
                    label={this.props.t("form.apartmentNum")}
                    placeholder={this.props.t("form.apartmentNumPlaceholder")}
                    error={touched.apartmentNum && errors.apartmentNum}
                    value={values.apartmentNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onWheel={event => {
                      event.preventDefault()
                    }}
                  />
                  {/* <Select
                  id="apartmentNum"
                  name={t("form.apartmentNum")}
                  value={values.apartmentNum}
                  label={t("form.apartmentNum")}
                  onChange={(e, value) => {
                    handleChange()
                    setFieldValue(t("form.apartmentNum"), value)
                  }}
                  onBlur={e => {
                    handleBlur()
                    setFieldTouched(t("form.apartmentNum"), true)
                  }}
                  style={{ display: "block" }}
                  placeholder={t("form.apartmentNumPlaceholder")}
                  // options={
                  //   ({ value: "", label: "Please choose" },
                  //   { value: "apartmancic1", label: "apartmancic1" })
                  // }
                >
                  <option
                    value=""
                    hidden
                    selected
                    disabled
                    label="Please choose"
                    aria-label="Please choose"
                  />
                  <option
                    value={t("apartments.apartment1")}
                    label={t("apartments.apartment1")}
                    aria-label={t("apartments.apartment1")}
                    // onclick={() =>
                    //   setFieldValue(
                    //     values.apartmentNum,
                    //     t("apartments.apartment1")
                    //   )
                    // }
                  />
                  <option
                    value={t("apartments.apartment2")}
                    label={t("apartments.apartment2")}
                    aria-label={t("apartments.apartment2")}
                    // onclick={() =>
                    //   setFieldValue(
                    //     t("form.apartmentNum"),
                    //     t("apartments.apartment2")
                    //   )
                    // }
                  />
                  <option
                    value={t("apartments.apartment3")}
                    label={t("apartments.apartment3")}
                    aria-label={t("apartments.apartment3")}
                    // onclick={() =>
                    //   setFieldValue("apartmentNum", t("apartments.apartment3"))
                    // }
                  />
                  <option
                    value={t("apartments.apartment4")}
                    label={t("apartments.apartment4")}
                    aria-label={t("apartments.apartment4")}
                    // onclick={() =>
                    //   setFieldValue(
                    //     t("form.apartmentNum"),
                    //     t("apartments.apartment4")
                    //   )
                    // }
                  />
                  <option
                    value={t("apartments.apartment5")}
                    label={t("apartments.apartment5")}
                    aria-label={t("apartments.apartment5")}
                    // onClick={() =>
                    //   setFieldValue("apartmentNum", t("apartments.apartment5"))
                    // }
                  />
                </Select> */}
                  <TextArea
                    id="comment"
                    type="text"
                    label={this.props.t("form.comment")}
                    placeholder={this.props.t("form.commentPlaceholder")}
                    error={touched.comment && errors.comment}
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ height: "100px" }}
                  />
                  <button
                    type="button"
                    className="outline"
                    onClick={() => {
                      if (window.confirm(this.props.t("form.resetConfirm")))
                        handleReset()
                    }}
                    disabled={!dirty || isSubmitting}
                  >
                    {this.props.t("form.resetButton")}
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    {this.props.t("form.sendButton")}
                  </button>
                  {/* <DisplayFormikState {...props} /> */}
                </form>
              </WithTranslateFormErrors>
            )
          }}
        </Formik>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ backgroundColor: "#4a4ebb" }}>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              &#10004; {this.props.t("form.successHeadline")}
            </h2>
          </div>
          <div style={{ padding: "10px" }}>
            <p>{this.props.t("form.successMessage")}</p>
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
                <button onClick={this.closeModal}>
                  {this.props.t("form.successButton")}
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withTrans(App)
