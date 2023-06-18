describe('Task1 - perform login', () => {
  it('Login and check', async () => {
      await browser.url(`https://www.saucedemo.com/`)

      await $('#user-name').setValue('standard_user')
      await $('#password').setValue('secret_sauce')
      await $('.submit-button').click()

      await expect($('span.title')).toHaveTextContaining('Products')
      await expect($('div#shopping_cart_container a.shopping_cart_link')).toBeExisting();
      await expect($$('.inventory_list .inventory_item')).toBeElementsArrayOfSize({ gte: 2 })
  });
});

describe ('Task2 - add product to cart', () => {
  it('Login and add product to cart', async () => {
    await browser.url(`https://www.saucedemo.com/`)

    await $('#user-name').setValue('standard_user')
    await $('#password').setValue('secret_sauce')
    await $('.submit-button').click()

    await expect($('span.title')).toHaveTextContaining('Products')

    const itemTitle = await $('#item_4_title_link div.inventory_item_name').getText();

    await $('button.btn_inventory').click();

    await expect($('.shopping_cart_badge')).toHaveText('1');

    await $('#shopping_cart_container a.shopping_cart_link').click();

    await browser.$(`//*[contains(@id, "item_") and .//div[@class="inventory_item_name" and text()="${itemTitle}"]]`).isExisting();

    await $('button#remove-sauce-labs-backpack').click();

    await expect($('.shopping_cart_badge')).not.toBeExisting();
  })
}

)

