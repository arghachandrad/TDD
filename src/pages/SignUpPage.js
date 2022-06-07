import { useEffect, useState } from "react"

const SignUpPage = () => {
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    password: "",
    passwordRepeat: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (
      formData.password &&
      formData.passwordRepeat &&
      formData.password === formData.passwordRepeat
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [formData.password, formData.passwordRepeat])

  return (
    <div>
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="email">Email</label>
      <input id="email" />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="passwordRepeat">Password Repeat</label>
      <input
        name="passwordRepeat"
        id="passwordRepeat"
        type="password"
        value={formData.passwordRepeat}
        onChange={handleChange}
      />
      <button disabled={disabled}>Sign Up</button>
    </div>
  )
}

export default SignUpPage
