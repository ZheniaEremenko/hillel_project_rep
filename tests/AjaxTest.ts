import { expect, type Locator, type Page } from '@playwright/test';

export class Ajax {
    readonly page: Page;
    readonly Ajaxlogo: Locator;
    readonly productDropdown: Locator;
    readonly solutionDropdown: Locator;
    readonly WhereBuyBtn: Locator;
    readonly BeaPartnerBtn: Locator;
    readonly ProtectionBtn: Locator;
    readonly Firstcamera: Locator;
    readonly headerH1forNewPage: Locator;
    readonly Scenario: Locator;
    readonly ClientHistory: Locator;
    readonly AjaxProductsReady: Locator;
    readonly FirstHistory: Locator;
    readonly SecondHistory: Locator;
    readonly thirdHistory: Locator;
    readonly PartnerRead: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Ajaxlogo = page.getByRole('link', { name: 'Ajax logo' });
        this.productDropdown = page.locator("//a[@id='react-aria-:Ri9j6:']");
        this.solutionDropdown = page.locator("//a[@id='react-aria-:Rj9j6:']");
        this.WhereBuyBtn = page.locator("//a[@class='btn btn-primary btn-lg']");
        this.BeaPartnerBtn = page.locator("//a[@class='btn btn-secondary']")
        this.ProtectionBtn = page.locator("//*[@id='__next']/nav/div/div[2]/div[1]/div/div/div[2]/ul/li[1]/a");
        this.Firstcamera = page.getByRole('link', { name: 'StarterKit Cam Plus' });
        this.headerH1forNewPage = page.locator("//h1[@class='animated fadeInUp']")
        this.Scenario = page.getByRole('navigation').getByRole('link', { name: 'Сценарії' });
        this.ClientHistory = page.locator("//*[@id='__next']/nav/div/div[2]/div[2]/div/div/div[1]/ul/li[2]/a");
        this.AjaxProductsReady = page.locator("//*[@id='__next']/nav/div/div[2]/div[2]/div/div/div[1]/ul/li[3]/a");
        this.FirstHistory = page.getByRole('link', { name: 'Виставка MOT' })
        this.SecondHistory = page.getByRole('link', { name: 'KORSA Windows' })
        this.thirdHistory = page.getByRole('link', { name: 'Муніципалітет Бергена Захист об’єкту Світової спадщини ЮНЕСКО' })
        this.PartnerRead = page.locator("//*[@id='client']/div[2]/ul/li/a")
    }

    async goto() {
        await this.page.goto('https://ajax.systems/ua/');
    }

    async getStarted() {
        await this.Ajaxlogo.first().click();
        await expect(this.productDropdown).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.solutionDropdown.click();
    }
}