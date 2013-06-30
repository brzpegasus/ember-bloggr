define(['templates', 'ember'], function (templates, Ember) {

  describe("Ember.Handlebars", function() {

    describe("date helper", function() {

      it("is registered", function() {
        should.exist(Ember.Handlebars.helpers.date);
      });

      it("renders pretty dates", function() {
        var view = Ember.View.create({
          now: new Date(),
          template: Ember.Handlebars.compile('{{date view.now}}')
        });
        Ember.run(function() {
          view.append(document.body);
        });
        view.$().text().should.equal('a few seconds ago');
        view.destroy();
      });
    });

    describe("markdown helper", function() {

      it("is registered", function() {
        should.exist(Ember.Handlebars.helpers.markdown);
      });

      it("converts markdown syntax to html", function() {
        var view = Ember.View.create({
          content: '# header',
          template: Ember.Handlebars.compile('{{markdown view.content}}')
        });
        Ember.run(function() {
          view.append(document.body);
        });
        view.$().html().should.contain('<h1 id="header">header</h1>');
        view.destroy();
      });
    });

  });
});
