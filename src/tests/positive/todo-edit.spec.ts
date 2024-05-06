import { Page, test } from '@playwright/test'
import todoItems from '../../data/todo-items'
import { TodoPage } from '../../pages/TodoPage'

test.describe('Positive Scenario: edit todo item', () => {
  let page: Page

  let todoPage: TodoPage

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    todoPage = new TodoPage(page)

    await todoPage.open()
  })

  test('should allow to edit to-do item', async () => {
    const todoItemName = 'Placeholder todo name'
    const todoItemNameNew = 'Placeholder edited todo name'

    await todoPage.addTodoItem(todoItemName)

    await todoPage.editTodoItem(0, todoItemNameNew)

    await todoPage.assertTodoItemNameByIndex(0, todoItemNameNew)
  })

  test('should allow to mark todo item as completed', async () => {
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)

    await todoPage.markTodoItemAsCompletedByIndex(0)

    await todoPage.assertTodoItemIsCompletedByIndex(0)
  })
})
