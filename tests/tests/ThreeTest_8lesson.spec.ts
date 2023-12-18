import { test, expect } from '@playwright/test';
import { LoginTest } from '../PromTestFramework';
import { Ajax } from '../AjaxTest';
import { setTimeout } from 'timers/promises';

test('First test (end-2-end) for select and order the Products from Prom.ua ', async ({ page }) => {
    const loginTest = new LoginTest(page)
    await loginTest.goto();
    await loginTest.getFirstProduct.click()
    await loginTest.getSecondProduct.click()
    await loginTest.ShopingIcon.click()
    await loginTest.CreateOrderbutton.click()
    await expect(loginTest.NewPageHeader).toBeVisible()

    await loginTest.PhoneNumber.pressSequentially("966725285")
    await loginTest.Lastname.pressSequentially("Єрьоменко")
    await loginTest.firstname.pressSequentially("Євгеній")
    await loginTest.ContinueBtn.click()
    await loginTest.Citydropdown.click()
    test.setTimeout(60000)
    await loginTest.CityMail.click()
    await loginTest.Numberdropdown.click()

    await loginTest.NumberOfViddilenya.click()
    await loginTest.NumberDropdownViddilennya.click()
    await loginTest.PaymentMethod.click()
    await page.getByTestId('reset_options_btn').click()

})


test('Second test for Ajax Product dropdown', async ({ page }) => {
    const ajax = new Ajax(page)
    await ajax.goto()
    await ajax.Ajaxlogo.click();
    await expect(ajax.productDropdown).toBeVisible();
    await expect(ajax.WhereBuyBtn).toBeVisible();
    await expect(ajax.BeaPartnerBtn).toBeVisible();

    await ajax.productDropdown.click();
    test.setTimeout(10000)
    await ajax.ProtectionBtn.click();
    await expect(ajax.Firstcamera).toBeVisible()
    test.setTimeout(10000)
    await ajax.Firstcamera.click()
    await expect(ajax.headerH1forNewPage).toBeVisible()
})



test('Third test for Ajax Solution dropdown', async ({ page }) => {
    const ajax = new Ajax(page);
    await ajax.goto()
    await ajax.Ajaxlogo.click();
    await expect(ajax.solutionDropdown).toBeVisible();
    await expect(ajax.WhereBuyBtn).toBeVisible();
    await expect(ajax.BeaPartnerBtn).toBeVisible();

    await ajax.solutionDropdown.click();
    test.setTimeout(10000)
    await expect(ajax.Scenario).toBeVisible();
    await expect(ajax.ClientHistory).toBeVisible();
    await expect(ajax.AjaxProductsReady).toBeVisible();
    test.setTimeout(10000)
    await ajax.ClientHistory.click();
    setTimeout(10000)
    await expect(ajax.FirstHistory).toBeVisible()
    await expect(ajax.SecondHistory).toBeVisible()
    await expect(ajax.thirdHistory).toBeVisible()
    await ajax.FirstHistory.click();
    test.setTimeout(10000)
    await expect(ajax.PartnerRead).toBeVisible()
    await ajax.PartnerRead.click()
})
