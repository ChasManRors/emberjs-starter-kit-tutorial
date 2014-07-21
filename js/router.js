Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});


// ... additional lines truncated for brevity ...
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo'); 
      // seems similar to Todo.all but that may just be because of ~/projects/starter-kit-1.6.1/index.html {{#each}} {{/each}}
  }
});
