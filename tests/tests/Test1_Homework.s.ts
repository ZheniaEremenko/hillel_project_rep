import { test, expect, type Page } from '@playwright/test';

test('Goto URL-link ', async ({ page }) => {
    await page.goto('https://www.google.com/')
});

test('Find elements on Google page', async ({ page }) => {
    await page.goto('https://www.google.com/')
    await expect(page.getByRole('img', { name: 'Google' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Пошук Google' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Мені пощастить' })).toBeVisible()
})


test('Test from 12.12 Lesson7 example', async ({ page }) => {
    await page.goto('https://www.google.com/')
    await expect(page.getByLabel('Пошук', { exact: true })).toBeVisible()
    await page.getByLabel('Пошук', { exact: true }).fill('dog')
    await page.keyboard.press("Enter")
    await expect(page).toHaveURL(/.*dog*/)
})


test('First test for Wiki en, expect elements', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Baldur%27s_Gate_3')
    await expect(page.getByRole('heading', { name: 'Baldur\'s Gate' }).locator('i')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Wikipedia The Free' })).toBeVisible()
    await expect(page.getByPlaceholder('Search Wikipedia')).toBeVisible()
    await expect(page.getByText('Development', { exact: true })).toBeVisible()


})

test('Failed Sign in Amazon, check that error is displayed', async ({ page }) => {
    await page.goto('https://www.amazon.com/')
    await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).hover()
    await page.getByRole('link', { name: 'Sign in', exact: true }).click()
    await page.getByLabel('Email or mobile phone number').fill('zhenia@mailinator.com')
    await page.getByLabel('Continue').click()
    await expect(page.getByText('There was a problem We cannot')).toBeVisible()


})

test('Create new user on Amazon site', async ({ page }) => {
    await page.goto('https://www.amazon.com/')
    await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).hover()
    await page.getByRole('link', { name: 'Start here.' }).click()
    let namefield = page.getByPlaceholder('First and last name')
    let emai = page.getByLabel('Mobile number or email')
    let password = page.getByPlaceholder('At least 6 characters')
    let repassword = page.getByLabel('Re-enter password')
    let button = page.getByLabel('Continue\n              Verify mobile number\n              Verify email')

    await namefield.fill('John')
    await emai.pressSequentially('zhenia@mailinator.com')
    await password.pressSequentially('!qwertY!1234')
    await repassword.pressSequentially('!qwertY!1234')
    await button.click()
    await expect(page.frameLocator('iframe[title="verification puzzle"]').getByText('Solve this puzzle to protect')).toBeVisible()
})