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

const App = () => {
  const { t } = useTranslation()

  return (
    <div className="app">
      <Formik
        user={{
          email: "",
          firstName: "",
          lastName: "",
          personNum: "",
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
          date: "",
          date2: "",
          apartmentNum: "",
          comment: "",
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
          date: Yup.date().required(t("form.dateReq")),
          date2: Yup.date().required(t("form.dateReq")),
          apartmentNum: Yup.number()
            .min(1, t("form.apartmentMin"))
            .max(6, t("form.apartmentMax"))
            .required(t("form.apartmentReq")),
          comment: Yup.string(),
        })}
        handleSubmit={(payload, { setSubmitting }) => {
          alert(t("form.alert") + payload.firstName + " :)")
          setSubmitting(false)
        }}
        mapPropsToValues={({ user }) => ({
          ...user,
        })}
        displayName="MyForm"
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
          } = props
          return (
            <WithTranslateFormErrors
              errors={errors}
              touched={touched}
              setFieldTouched={setFieldTouched}
            >
              <form
                onSubmit={handleSubmit}
                method="post"
                name="booking"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="booking" />
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
                <TextInput
                  id="apartmentNum"
                  type="number"
                  label={t("form.apartmentNum")}
                  placeholder={t("form.apartmentNumPlaceholder")}
                  error={touched.apartmentNum && errors.apartmentNum}
                  value={values.apartmentNum}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

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
