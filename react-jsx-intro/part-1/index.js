const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Karen" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))