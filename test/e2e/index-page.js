function IndexPage() {
  this.get = function () {
    browser.get('/#');
  };

  this.getTitle = function () {
    return browser.getTitle();
  };
}

module.exports = IndexPage;