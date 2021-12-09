// Define a Tweet component which takes as props the username of the user who wrote the tweet, 
// the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.


const Tweet = (props) => (
    <div>
        <b>{props.username}</b>
        <p>{props.user} -  {props.date}</p> 
        <p><i>{props.message}</i></p> 
        <p> --------- </p>
    </div>
  )