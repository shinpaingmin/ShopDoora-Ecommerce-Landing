const Button = ({ customClass, label }) => {
  return (
    <button type="button" className={customClass}>
        { label }
    </button>
  )
}

export default Button