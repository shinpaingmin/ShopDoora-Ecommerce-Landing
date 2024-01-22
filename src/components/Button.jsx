const Button = ({ customClass, label, Icon=null, size }) => {
  return (
    <button type="button" className={customClass}>
        { label }
        {
          Icon && <Icon size={size}
                        className='mt-1' />
        }
    </button>
  )
}

export default Button