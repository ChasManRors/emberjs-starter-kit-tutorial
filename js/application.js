window.Todos = Ember.Application.create(); // create the application

Todos.ApplicationAdapter = DS.FixtureAdapter.extend(); // database adapter connection to use, in this case it is static fixture data

