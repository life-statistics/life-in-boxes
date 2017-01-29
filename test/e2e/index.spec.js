// var IndexPage = require('./index-page');

// describe("hello-protractor", function () {

//   var page = new IndexPage();

//   beforeEach(function() {
//       page.get();
//   });

//   describe("index", function () {
//     it("should display the correct title", function () {
//       expect(page.getTitle()).toBe('Protractor and Sauce Labs Dummy Page');
//     });
//   });
// });

// spec.js
describe('Protractor Demo App1', function () {
  it('should greet the named user', function () {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Example');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Example!');
  });
});