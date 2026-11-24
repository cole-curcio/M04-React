import profilePic from './assets/pfp.jpg'


function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Cole Curcio</h2>
            <p className="card-text">I learned about Software Development.</p>
        </div>
    );
}

export default Card