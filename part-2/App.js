// Create an App component that renders at least three tweets.

const App = () => (
    <div>
      <Tweet 
        username = "tommy"
        user = "Tom Black"
        date = { new Date().toDateString() }
        message = "Hello everybody!"
       />
      <Tweet
        username = "bob"
        user = "Robert Browny"
        date = { new Date().toDateString() }
        message = "This is my test Tweet"
      />
      <Tweet 
        username = "elli" 
        user = "Eleonora Budnik"
        date = { new Date().toDateString() }
        message = "This is my first tweet"/>
    </div>
  )

ReactDOM.render(<App />, document.getElementById("root"))
