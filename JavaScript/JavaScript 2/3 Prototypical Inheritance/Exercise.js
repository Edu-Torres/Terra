function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}
HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function (value) {
        this.items.push(value);
    } 
    this.removeItem = function (value) {
        this.items.splice(this.items.indexOf(value), 1);
    } 
}
// Not using the prototype because the instance has a method we want
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;