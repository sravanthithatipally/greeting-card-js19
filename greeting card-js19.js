let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"sravanthi","to":"maneesha"}';
let parsedobject = JSON.parse(greeting);

let frompara = document.getElementById("fromname");
let topara = document.getElementById("toname");
let wishpara = document.getElementById("subpart");

frompara.textContent = "From:" + parsedobject.from;
topara.textContent = "To:" + parsedobject.to
wishpara.textContent = parsedobject.greetText;