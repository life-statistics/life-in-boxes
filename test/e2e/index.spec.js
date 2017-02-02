describe("hello-protractor", function () {
  describe("index", function () {
    it("should display the correct title", function () {
      browser.get('http://localhost:3000');
      expect(browser.getTitle()).toBe('Protractor and Sauce Labs Dummy Page');
    });
  });
});