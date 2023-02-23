describe("describe", function () {
  it("test", function () { });
});
////////
let assert = chai.assert;
describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(""), false);
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });

    it("not an empty string", function () {
      assert.equal(validateEmail("    "), false);
    });
    it("email length less than 5", function () {
      assert.equal(validateEmail(""), false);
    })

  });
  describe("valid data", function () {
    it("Don't have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
    });
    it("Have more then one @", function () {
      assert.isFalse(validateEmail("email@@gmail.com"), "Have more than one @");
    });

    it("Don't have dot", function () {
      assert.isFalse(validateEmail("email@gmailcom"), false);
      assert.isFalse(validateEmail("e.mail.@gmail.com"), false);
    });
    it("Have dot", function () {
      assert.isFalse(validateEmail("e.mail@gmail.com"), true);
    });
  });

});
