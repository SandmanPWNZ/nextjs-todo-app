import gql from 'graphql-tag'

export const GET_TODOS = gql`
  query {
    todoes {
      id
      title
      completed
    }
  }
`

export const TOGGLE_TODO = gql`
  mutation toggleTodo($data: TodoUpdateInput!, $where: TodoWhereUniqueInput!){
    updateTodo(data: $data, where: $where) {
      id
      title
      completed
    }
  }
`

export const UPDATE_TODO = gql`
  mutation updateTodo($data: TodoUpdateInput!, $where: TodoWhereUniqueInput!){
    updateTodo(data: $data, where: $where) {
      id
      title
      completed
    }
  }
`

export const DELETE_TODO = gql`
  mutation deleteTodo($where: TodoWhereUniqueInput!){
      deleteTodo(where: $where){
          id
      }
  }
`

export const ADD_TODO = gql`
  mutation createTodo($data: TodoCreateInput!){
      createTodo(data: $data){
          id
          title
          completed
      }
  }
`
