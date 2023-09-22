
/*

<div id="parent">
    <div id="child">
        <h1>I am H1 tag
        </h1>
        <h2>I am h2</h2>
    </div>
    <div id="child2">
        <h1>
        </h1>
        <h2></h2>
    </div>
</div>

ReactcreateElement(object)=> HTML(which browser understands)

*/

const parent = React.createElement("div", {id:"parent"},[
React.createElement("div", {id:"child"}, [
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),
]),
React.createElement("div", {id:"child2"}, [
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),

]),
]);


/*
const heading = React.createElement("h1",
 {id: "heading" , xyz:"abc" }, 
 */
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

