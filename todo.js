/**
 * Created by rg on 18/07/14.
 */

function TodoCtrl($scope) {

    $scope.todos = [
        {text: "Learn AngularJS", done: false},
        {text: "Write an App", done: false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    };

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false});
        $scope.formTodoText = '';
    }


}