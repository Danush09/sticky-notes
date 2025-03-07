import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Sticky Notes App</span></h1>
            </header>
            <main className="public__main">
                <p>Write Notes to your working collegues</p>
                <address className="public__addr">
                    For furthur query or issues<br />
                    Admin
                    <br />
                    MB Block
                    <br />
                    Banglore<br />
                    <a href="tel:+15555555555">(+91) 12345-6789</a>
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public