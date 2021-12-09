
const App = () => {
  return (<div>
          <Person  name = "Artur" age = {17} hobbies = { ["books", "travel", "yoga"] } />
          <Person  name = "Gertruda" age = {26} hobbies = { ["movies", "games"] }/>
          <Person  name = "John Travolta" age = {60} />
        </div>)
}

ReactDOM.render(<App />, document.getElementById("root"))
