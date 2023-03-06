const Header = (props) => {
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    };
    return (
        <header style={headerStyle}>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header