# E2E testing for ToDo MVC app

### There is lightweight to-do list webapp
- The application must include an input field with a placeholder text "What needs to be done". The field should be initially empty. 
- Upon entering an to-do item in the input field, e.g. "My item 1" or "My item 2" and pressing Enter, the to-do item should be added to the list under the input field. 
- Each to-do item in the list should have a radio button to the left and an "X" sign on the right to delete the to-do item. 
- When an item in the list is double-clicked, it should become editable, allowing the user to make changes. Pressing enter should save the changes. 
- Clicking on the radio button of an item in the list should mark the item as done. Multiple items can be marked as done, and an option to clear completed items should appear under all items. 
- Pressing the "clear completed" option should remove selected completed items from the list. 
- There should be a counter displayed near the "completed" option, which appears only when one or more items are selected. The counter should show the number of unchecked items left in the list, even if there are checked items.

### Task
Please test that you are able to Create, Edit, Complete and Delete to-dos from the list.
Please automate four positive and four negative scenarios and document the test cases.
Using Typescript and Playwright for web UI testing.
Please provide file structure for framework including filenames and code to use.
If there is a need to add additional requirement to what is already described - please do as well at the beginning of solution.

## Test

### Positive
- should allow to add todo item
- should allow to edit to-do item
- should allow to mark todo item as completed
- should allow to remove todo item

### Negative
- should not allow adding empty todo item
- should not allow adding duplicate todo item
- should not allow editing todo item to become empty
- should not allow marking a todo item as completed while the item is already completed

## Installation

### Steps to install project:

1. Cloning the repository
```shell
git clone https://github.com/i-am-v-alexander-v/playwright-test-automation-framework
```

2. Move to directory
```shell
cd playwright-test-automation-framework
```

3. Installing required dependencies
```shell
npm install
```

# Command Line

## Running all tests

```shell
npx playwright test
```

## Running a single test file

```shell
npx playwright test positive/todo-create.spec.ts
```

## Run a set of test files

```shell
npx playwright test positive/ negative/
```

## Run files that have create or edit in the file name

```shell
npx playwright test create edit
```

## Run the test with the title

```shell
npx playwright test -g "should allow to add todo item"
```

## Running tests in headed mode

```shell
npx playwright test positive/todo-create.spec.ts --headed
```

## Running tests on a specific project

```shell
npx playwright test positive/todo-create.spec.ts --project=chromium
```
