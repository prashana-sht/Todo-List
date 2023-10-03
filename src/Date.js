export default function Date() {

    let date = new Date().toDateString();
 
    console.log(date);
 
    return (
        <div className="App">v
            <h1>Current date</h1>
            {/* <h2> {output}</h2> */}
        </div>
    );
}
 