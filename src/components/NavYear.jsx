import './style/NavYear.scss'

function NavYear ({ years, year, setYear }) {
  return (
    <nav className='NavYear'>
      {years?.map(y => (
        <button
          className={`year ${year === y && 'active'}`}
          onClick={() => setYear(y)}
          key={y}
        >
          {y}
        </button>
      ))}
    </nav>
  )
}

export default NavYear
