import { Page, test } from '@playwright/test'
import todoItems from '../../data/todo-items'
import { TodoPage } from '../../pages/TodoPage'

test.describe('Positive Scenario: remove todo item', () => {
  let page: Page

  let todoPage: TodoPage

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    todoPage = new TodoPage(page)

    await todoPage.open()
  })

  test('should allow to remove todo item', async () => {
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)

    await todoPage.deleteTodoItemByIndex(0)

    await todoPage.assertTodoItemCount(0)
  })
})
