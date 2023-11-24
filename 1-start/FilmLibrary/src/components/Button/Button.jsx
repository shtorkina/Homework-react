import './Button.css'

function Button({title}) {
   
  return (
    <>
      <div>
        <button className="button-search">{title}</button>
      </div>
    </>
  )
}

export default Button
