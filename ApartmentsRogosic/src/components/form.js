import "../styles/formik-demo.css"
import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import classnames from "classnames"
import { useTranslation } from "react-i18next"
import WithTranslateFormErrors from "../i18n/useTranslateFormErrors"

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

const App = ({ apartment }) => {
  const { t } = useTranslation()

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
            .min(2, t("form.firstNameMin"))
            .required(t("form.firstNameReq")),
          lastName: Yup.string()
            .min(2, t("form.lastNameMin"))
            .required(t("form.lastNameReq")),
          email: Yup.string()
            .email(t("form.emailError"))
            .required(t("form.emailReq")),
          personNum: Yup.number()
            .min(1, t("form.personNumMin"))
            .max(20, t("form.personNumMax"))
            .required(t("form.personNumReq")),
          childrenNum: Yup.number()
            .min(0, t("form.personNumMin"))
            .max(20, t("form.childrenNumMax")),
          date: Yup.date()
            .min(new Date(), t("form.startDateLow"))
            .required(t("form.dateReq")),
          date2: Yup.date()
            .required(t("form.dateReq"))
            .min(Yup.ref("date"), t("form.endDateLess")),
          apartmentNum: Yup.string().required(t("form.apartmentReq")),
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
              alert("Good job")
              // <PopUp />
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
                  label={t("form.firstName")}
                  placeholder={t("form.firstNamePlaceholder")}
                  error={touched.firstName && errors.firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextInput
                  id="lastName"
                  type="text"
                  label={t("form.lastName")}
                  placeholder={t("form.lastNamePlaceholder")}
                  error={touched.lastName && errors.lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextInput
                  id="email"
                  type="email"
                  label={t("form.email")}
                  placeholder={t("form.emailPlaceholder")}
                  error={touched.email && errors.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextInput
                  id="personNum"
                  type="number"
                  label={t("form.personNum")}
                  placeholder={t("form.personNumPlaceholder")}
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
                  label={t("form.childrenNum")}
                  placeholder={t("form.childrenNumPlaceholder")}
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
                  label={t("form.dateArrival")}
                  placeholder={t("form.date1Placeholder")}
                  error={touched.date && errors.date}
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextInput
                  id="date2"
                  type="date"
                  label={t("form.dateDeparture")}
                  placeholder={t("form.date2Placeholder")}
                  error={touched.date2 && errors.date2}
                  value={values.date2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <TextInput
                  id="apartmentNum"
                  type="number"
                  label={t("form.apartmentNum")}
                  placeholder={t("form.apartmentNumPlaceholder")}
                  error={touched.apartmentNum && errors.apartmentNum}
                  value={values.apartmentNum}
                  onChange={handleChange}
                  onBlur={handleBlur}
                /> */}
                <Select
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
                </Select>
                <TextArea
                  id="comment"
                  type="text"
                  label={t("form.comment")}
                  placeholder={t("form.commentPlaceholder")}
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
                    if (window.confirm(t("form.resetConfirm"))) handleReset()
                  }}
                  disabled={!dirty || isSubmitting}
                >
                  {t("form.resetButton")}
                </button>
                <button type="submit" disabled={isSubmitting}>
                  {t("form.sendButton")}
                </button>
                {/* <DisplayFormikState {...props} /> */}
              </form>
            </WithTranslateFormErrors>
          )
        }}
      </Formik>
    </div>
  )
}
export default App
