import {test, expect } from '@playwright/test';


test('API GET Request', async({request}) => {

    const response = await request.get('https://demoqa.com/BookStore/v1/Books')

    expect(response.status()).toBe(200)

}) 

test('API POST Request', async({request}) => {

  const response = await request.post('https://demoqa.com/Account/v1/Authorized', {
    data: {
      userName: "Stefan",
      password: "Vinetu10!"
    },
  })

  expect(response.status()).toBe(200)
  })
