var IndexPage = require('./index-page');

describe("hello-protractor", function () {

  var page = new IndexPage();

  beforeEach(function() {
      page.get();
  });

  describe("index", function () {
    it("should display the correct title", function () {
      expect(page.getTitle()).toBe('Protractor and Sauce Labs Dummy Page');
    });
  });
});