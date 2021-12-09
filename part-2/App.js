// Create an App component that renders at least three tweets.

const App = () => (
    <div>
      <Tweet fromUser="Tim" toUser="Tom" date="12/7/2021" message="Hi Tom!" />
      <Tweet fromUser="Tom" toUser="Tim" date="12/7/2021" message="Hello stranger"/>
      <Tweet fromUser="Tim" toUser="Tom" date="12/8/2021" message="This is my test tweet"/>
    </div>
  )

ReactDOM.render(<App />, document.getElementById("root"))
