Todos.Todo = DS.Model.extend({  // So the Todos application (defnd in application.js) has a BO Todo (Application.Model(Todos.Todo))
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});


Todos.Todo.FIXTURES = [         // The Todos Application's model Todo will have a set of data static data
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 },
 {
   id: 4,
   title: 'Bit the Dog',
   isCompleted: false
 }
    
];
