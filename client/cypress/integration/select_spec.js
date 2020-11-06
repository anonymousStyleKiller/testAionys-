describe('Проверка на изменение выбора языка', ()=>{
    it('Русский язык', ()=>{
        cy.visit('/')
        cy.get('select')
            .select('Ru').should('have.value', 'ru')
    })
})