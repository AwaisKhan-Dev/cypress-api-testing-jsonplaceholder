const url = 'https://jsonplaceholder.typicode.com/posts/1';


describe('Get Post Api Tests', ()=> {
    it('Should return 200 Status Code',() => {
        cy.request(url)
        .its('status')
        .should('eq',200)
        .then((status) => {
            cy.log(`API Status Code: ${status}`)
        })
    })

    it('should contain the correct userId', () => {
        cy.request(url)
        .its('body.userId')
        .should('eq',1)
    })

    it('Should contain the correct Id', () => {
        cy.request(url)
        .its('body.id')
        .should('eq',1)
    });

    it('Should contain the correct Title', () => {
        cy.request(url)
        .its('body.title')
        .should('include','sunt')
    });
    
    it('Should contain the correct body', () => {
        cy.request(url)
        .its('body.body')
        .should('include',`suscipit\n`)
    });

    it('Should contain non-empty response body', () => {
        cy.request(url)
        .its('body.body')
        .should('not.be.empty')
    })
})