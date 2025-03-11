const ProgrammingLanguagesList = ({langugaes}:{langugaes:string[]}) => {
  if(langugaes.length === 0){
    return (
        <div>
            <p>No programming languages found</p>
        </div>
    )
  }

  return (
    <div>
      <ul>
        {langugaes.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProgrammingLanguagesList