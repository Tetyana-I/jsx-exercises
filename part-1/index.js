// App
// renders a div with instances of the other two components.

const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent  name="Steve"/>
    </div>
  )

ReactDOM.render(<App />, document.getElementById("root"))
  