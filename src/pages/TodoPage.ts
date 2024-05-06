import { expect, Locator, Page } from '@playwright/test'

export class TodoPage {
  private page: Page

  private readonly todoInput: Locator
  private readonly todoItems: Locator
  private readonly todoCounter: Locator
  private readonly todoClearCompleted: Locator

  constructor(page: Page) {
    this.page = page

    this.todoInput = this.page.locator('.new-todo')
    this.todoItems = this.page.locator('.todo-list li')
    this.todoCounter = this.page.locator('.todo-count')
    this.todoClearCompleted = this.page.locator('.clear-completed')
  }

  async open() {
    await this.page.goto('https://todomvc.com/examples/angular2/')
  }

  async addTodoItem(todoItem: string) {
    await this.todoInput.fill(todoItem)
    await this.todoInput.press('Enter')
  }

  async editTodoItem(todoItemIndex: number, newTodoItemName: string) {
    const todoItem = this.todoItems.nth(todoItemIndex)
    await todoItem.dblclick()
    await todoItem.locator('.edit').fill(newTodoItemName)
    await todoItem.locator('.edit').press('Enter')
  }

  async markTodoItemsAsCompleted() {
    const todoItemsToggle = await this.todoItems.locator('.toggle').all()

    for (let toggle of todoItemsToggle) {
      await toggle.click()
    }
  }

  async markTodoItemAsCompletedByIndex(todoItemIndex: number) {
    await this.todoItems.nth(todoItemIndex).locator('.toggle').click()
  }

  async markTodoItemAsCompletedByName(todoItemName: string) {
    await this.todoItems.filter({ hasText: todoItemName }).locator('.toggle').click()
  }

  async clickOnClearCompletedTodoItems() {
    await this.todoClearCompleted.click()
  }

  async deleteTodoItemByIndex(todoItemIndex: number) {
    const todoItem = this.todoItems.nth(todoItemIndex)
    await todoItem.hover()
    await todoItem.locator('.destroy').click()
  }

  async deleteTodoItemByName(todoItemName: string) {
    const todoItem = this.todoItems.filter({ hasText: todoItemName }).first()
    await todoItem.hover()
    await todoItem.locator('.destroy').click()
  }

  async assertTodoInputText(text: string) {
    await expect(this.todoInput).toHaveText(text)
  }

  async assertTodoItemCount(count: number) {
    await expect(this.todoItems).toHaveCount(count)
  }

  async assertTodoItemNameByIndex(index: number, name: string) {
    await expect(this.todoItems.nth(index)).toHaveText(name)
  }

  async assertTodoItemByNames(todoItemsName: string[]) {
    await expect(this.todoItems).toHaveText(todoItemsName)
  }

  async assertTodoItemIsCompletedByIndex(index: number) {
    await expect(this.todoItems.nth(index)).toHaveClass('completed')
  }

  async assertTodoItemIsNotCompletedByIndex(index: number) {
    await expect(this.todoItems.nth(index)).not.toHaveClass('completed')
  }

  async assertTextOfCount(text: string) {
    await expect(this.todoCounter).toHaveText(text)
  }
}
