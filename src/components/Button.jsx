const Button = ({label, iconURL, outline, fullWidth}) => {
  return (
    <button className={`${outline ? 'bg-transparent border-2 text-slate-gray' : 'bg-black border text-white'} flex p-3 justify-center items-center px-7 py-4 font-montserrat text-lg leading-none gap-2 flex-row rounded-full ${fullWidth && 'w-full'}`}>
        {label}
        {iconURL && <img className="ml-2 rounded-full w-5 wh-5" src={iconURL} alt="icon" />}
    </button>
  )
}

export default Button