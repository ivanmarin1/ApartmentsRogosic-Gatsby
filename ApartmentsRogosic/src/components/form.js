import "../styles/formik-demo.css"
import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"
import classnames from "classnames"

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .strict(true)
      .min(2, "Sigurno vam je ime dulje :)")
      .required("Ime je obavezno."),
    lastName: Yup.string()
      .min(2, "Sigurno vam je ime dulje :)")
      .required("Prezime je obavezno."),
    email: Yup.string()
      .email("Neispravna email adresa")
      .required("Email je obavezan!"),
    personNum: Yup.number()
      .min(1, "Sigurno vas je više od 0")
      .max(20, "Nemamo gdje smjestiti toliko osoba :)")
      .required("Broj osoba je obavezan"),
    date: Yup.date().required("Datum je obavezan"),
    date2: Yup.date().required("Datum je obavezan"),
    apartmentNum: Yup.number()
      .min(1, "Ne posjedujemo nulti apartman :)")
      .max(6, "Nemamo baš toliko apartmana :)")
      .required("Morate uzeti barem jedan apartman :)"),
    comment: Yup.string(),
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert("Hvala vam na vašoj rezervaciji " + payload.firstName + " :)")
    setSubmitting(false)
  },
  displayName: "MyForm",
})

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
const MyForm = props => {
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
  } = props
  return (
    <form
      onSubmit={() => {
        if (window.confirm("Jeste li sigurni da želite poslati zahtjev?"))
          handleSubmit()
      }}
    >
      <TextInput
        id="firstName"
        type="text"
        label="Ime"
        placeholder="Ivan"
        error={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="lastName"
        type="text"
        label="Prezime"
        placeholder="Ivić"
        error={touched.lastName && errors.lastName}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="Unesite vašu email adresu"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="personNum"
        type="number"
        label="Broj osoba"
        placeholder="Unesite broj osoba"
        error={touched.personNum && errors.personNum}
        value={values.personNum}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="date"
        type="date"
        label="Datum dolaska"
        placeholder="Izaberite datum dolaska"
        error={touched.date && errors.date}
        value={values.date}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="date2"
        type="date"
        label="Datum odlaska"
        placeholder="Izaberite datum odlaska"
        error={touched.date2 && errors.date2}
        value={values.date2}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="apartmentNum"
        type="number"
        label="Broj željenog apartmana"
        placeholder="Koji apartman biste željeli"
        error={touched.apartmentNum && errors.apartmentNum}
        value={values.apartmentNum}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextArea
        id="comment"
        type="text"
        label="Dodatni komentar"
        placeholder="Ukoliko imate još pitanja, slobodno pitajte :)"
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
          if (window.confirm("Jeste li sigurni da želite poništiti unos?"))
            handleReset()
        }}
        disabled={!dirty || isSubmitting}
      >
        Poništi
      </button>
      <button type="submit" disabled={isSubmitting}>
        Pošalji
      </button>
      {/* <DisplayFormikState {...props} /> */}
    </form>
  )
}

const MyEnhancedForm = formikEnhancer(MyForm)

const App = () => (
  <div className="app">
    <MyEnhancedForm
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
    />
  </div>
)

export default App
