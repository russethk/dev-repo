/** Tweet Component: a single tweet 
 * Props
 * - name: name of the user
 * - username: username of the user
 * - date: date of the tweet
 * - message: content of the tweet
*/

const Tweet = ({ name, username, date, message  }) => {
    return (
        <div className="tweet">
            <span>{name}</span>
            <span className="username">{username}</span> 
            <span className="date" >• {date}</span>
            <span className="message">{message}</span>
        </div>
    );
}


    