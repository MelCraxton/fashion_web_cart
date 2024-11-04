export default function Header({ cartCount }){
    return(
        <header id='main-header'>
            <div id='main-title'>
                <img src='logo.png' alt="elegant fashion" />
                <h1>Elegance</h1>
            </div>
            <p>
                <button>Cart ({ cartCount })</button>
            </p>
        </header>
    )
}