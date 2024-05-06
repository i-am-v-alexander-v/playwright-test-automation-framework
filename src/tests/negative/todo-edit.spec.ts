import { Page, test } from '@playwright/test'
import todoItems from '../../data/todo-items'
import { TodoPage } from '../../pages/TodoPage'

test.describe('Negative Scenario: edit todo item', () => {
  let page: Page | null = null

  let todoPage: TodoPage | null = null

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    todoPage = new TodoPage(page)

    await todoPage.open()
  })

  test('should not allow editing todo item to become empty', async () => {
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)

    await todoPage.editTodoItem(0, '')

    await todoPage.assertTodoItemCount(1)
    await todoPage.assertTodoItemNameByIndex(0, todoItems.TODO_ITEM_ONE)
  })

  test('should not allow marking a todo item as completed while the item is already completed', async () => {
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)
    await todoPage.addTodoItem(todoItems.TODO_ITEM_TWO)

    await todoPage.markTodoItemsAsCompleted()

    await todoPage.markTodoItemAsCompletedByIndex(0)
    await todoPage.assertTodoItemIsNotCompletedByIndex(0)
  })
})
