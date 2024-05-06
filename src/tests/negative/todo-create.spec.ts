import { Page, test } from '@playwright/test'
import todoItems from '../../data/todo-items'
import { TodoPage } from '../../pages/TodoPage'
import GenerateUtils from '../../utils/GenerateUtils'

test.describe('Negative Scenario: create a new todo item', () => {
  let page: Page

  let todoPage: TodoPage

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    todoPage = new TodoPage(page)

    await todoPage.open()
  })

  test('should not allow adding empty todo item', async () => {
    await todoPage.addTodoItem('')

    await todoPage.assertTodoItemCount(0)
  })

  test('should not allow adding duplicate todo item', async () => {
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)
    await todoPage.addTodoItem(todoItems.TODO_ITEM_ONE)

    await todoPage.assertTodoItemCount(1)
  })
})
