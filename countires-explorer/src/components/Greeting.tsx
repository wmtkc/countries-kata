type GreetingProps = {
    name?: String
}

const Greeting = ({ name }: GreetingProps) => {
    return (
        <>
            <h1>Hello, { name ?? "World"}!</h1>
        </>
    )
}

export default Greeting