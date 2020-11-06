describe('Получение всех заметок', ()=>{
    it('Проверка на получение заметок', ()=>{
        cy.server()
        cy.route({
            method: 'GET',
            url: '/'
        }).should((response)=>{
                     expect(response.status).to.eq(200)
        })
    })
})