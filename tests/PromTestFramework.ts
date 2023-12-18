import { expect, type Locator, type Page } from '@playwright/test';

export class LoginTest {
    readonly page: Page;
    readonly getFirstProduct: Locator;
    readonly getSecondProduct: Locator;
    readonly ShopingIcon: Locator;
    readonly CreateOrderbutton: Locator;
    readonly NewPageHeader: Locator;
    readonly PhoneNumber: Locator;
    readonly Lastname: Locator;
    readonly firstname: Locator;
    readonly ContinueBtn: Locator;
    readonly Citydropdown: Locator;
    readonly CityMail: Locator;
    readonly Numberdropdown: Locator
    readonly NumberOfViddilenya: Locator;
    readonly NumberDropdownViddilennya: Locator;
    readonly PaymentMethod: Locator;
    readonly resetBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.getFirstProduct = page.locator('div:nth-child(5) > div > div:nth-child(6) > .MafxA > div > .VS-Ex')
        this.getSecondProduct = page.locator('div:nth-child(6) > div > div:nth-child(6) > .MafxA > div > .VS-Ex')
        this.ShopingIcon = page.locator("//button[@data-qaid='shopping_cart']");
        this.CreateOrderbutton = page.locator("//button[@class='P3IXJ _0JiZX lWCVE']")
        this.NewPageHeader = page.getByTestId('header_title')
        this.PhoneNumber = page.locator("//input[@id='phoneInputLabel']")
        this.Lastname = page.locator("//input[@id='last_name_block']");
        this.firstname = page.locator("//input[@id='first_name_block']");
        this.ContinueBtn = page.locator("//button[@data-testid='save_btn']");
        this.Citydropdown = page.getByRole('button', { name: 'Нова Пошта від 50' }).getByTestId('radio_btn');
        this.CityMail = page.getByTestId('city_dd').locator('div').filter({ hasText: 'Вкажіть місто' });
        this.Numberdropdown = page.getByTestId('suggest_list_block').locator('li').filter({ hasText: 'Київ (Київська обл.)' });
        this.NumberOfViddilenya = page.getByTestId('warehouse_dd').locator('div').filter({ hasText: 'Виберіть відділення' })
        this.NumberDropdownViddilennya = page.getByTestId('suggest_list_block').locator('li').filter({ hasText: '№2: вул. Богатирська,' })
        this.PaymentMethod = page.getByRole('button', { name: 'Безпечна оплата карткою • Як післяплата, тільки без переплат • Повернем гроші, я' });
        this.resetBtn = page.getByTestId('reset_options_btn');
    }

    async goto() {
        await this.page.goto('https://prom.ua/ua/Kombikorma-i-premiksy');
    }

    async getStarted() {
        await this.getFirstProduct.first().click();
        await expect(this.getSecondProduct).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.ShopingIcon.click();
    }
}