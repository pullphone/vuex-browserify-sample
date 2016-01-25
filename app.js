Vue.use(Vuex.default);

var state = {
  input: "",
  todos: []
};

var actions = {
  addTodo: 'ADD_TODO'
};

var mutations = {
  ADD_TODO: function (state, text) {
    state.todos.push(text);
  }
};

var store = new Vuex.Store({
  state,
  actions,
  mutations
});

Vue.component('text-form', {
  template: '<div><input type="text" v-model="input" @keyup.enter="addTodo"/></div>',
  props: ['input'],
  methods: {
    addTodo: function(e){
      var text = e.target.value;
      store.actions.addTodo(text);
      e.target.value = '';
    }
  }
});

Vue.component('todo-list', {
  template: '<ul><li v-for="todo in todos">{{todo}}</li></ul>',
  props: ['todos']
});


window.onload = function(){
  var main = new Vue({
    el: "body",
    data: store.state
  });
};
