import { Page, test } from '@playwright/test'
import todoItems from '../../data/todo-items'
import { TodoPage } from '../../pages/TodoPage'

test.describe('Positive Scenario: create a new to-do item', () => {
  let page: Page

  let todoPage: TodoPage

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    todoPage = new TodoPage(page)

    await todoPage.open()
  })

  test('should allow to add todo item', async () => {
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)

    await todoPage.assertTodoItemByNames([todoItems.TODO_ITEM_ONE])
  })
})
