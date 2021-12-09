// Define a Tweet component which takes as props the username of the user who wrote the tweet, 
// the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.


const Tweet = (props) => (
    <div>
        <p>from: <b>{props.fromUser}</b> to: <b>{props.toUser}</b></p> 
        <p>{props.date}</p> 
        <p><i>{props.message}</i></p> 
        <p> --------- </p>
    </div>
  )