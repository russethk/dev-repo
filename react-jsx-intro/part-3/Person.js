const MAX_NAME_LENGTH_TO_SHOW = 6;

/** Info on a single person.
 *
 * Props:
 * - name
 * - age
 * - hobbies: array of strings like ["chess", "boxing", "swimming"]
 */
 
function Person({ age, hobbies, name }) {
    const voteText = age >= 18 ? "Please go vote!" : "You must be 18.";

    const hobbiesList = hobbies.map(h => <li>{h}</li>);
    const nameDisplay = name.length > MAX_NAME_LENGTH_TO_SHOW ? name.slice(0, MAX_NAME_LENGTH_TO_SHOW) + "..." : name;

    return (
        <div className="Person">
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {nameDisplay}</li>
                <li>Age: {age}</li>
                <li>Hobbies:</li>
                <ul>{hobbiesList}</ul>
                <li>Voting msg: {voteText}</li>
            </ul>
        </div>
    );
}
