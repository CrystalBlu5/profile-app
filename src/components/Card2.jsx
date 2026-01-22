import bungu_logo from '../assets/bungu_logo.png';

function Card2() {
    const name = "Card Component";
    const title = "Welcome to the Card";

    return (
        <div className="card">
            <img src="bungu_logo.JPG" alt="header" />
            <h2>Card Title</h2>
            <p>This is a description of the card. It provides more details about the content.</p>
        </div>
    );
}

export default Card2;