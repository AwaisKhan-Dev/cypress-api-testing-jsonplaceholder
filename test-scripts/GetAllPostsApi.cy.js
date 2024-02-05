const apiurl = 'https://jsonplaceholder.typicode.com/posts';

describe('Get All Posts Api Tests', () => {

    it('Should return 200 status code', () => {
        cy.request(apiurl)
        .its('status')
        .should('eq',200);
    });

    it('Should get the list of posts', () => {
        cy.request(apiurl).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length.above(0);
        })
    });

    it('Should get specific post by ID', () => {
        cy.request(apiurl).then((response) => {
            expect(response.status).to.eq(200);
            
            const postwithID1 = response.body.find(posts => posts.id === 1);
            expect(postwithID1).to.exist;
            expect(postwithID1.id).to.eq(1);
        })
    });

    it('Should check if each ID in response is unique', () => {
        cy.request(apiurl).then((response) => {
            expect(response.status).to.eq(200);

            const postIds = response.body.map(post => post.id)
            const uniqueIds = new Set(postIds)
            expect(uniqueIds.size).to.eq(postIds.length)

        })
    });

    it('Should check if ID and User ID in response is Integer', () => {
        cy.request(apiurl).then((response) => {
            expect(response.status).to.eq(200);

            const posts = response.body;

            posts.forEach(post => {
                expect(post.id, 'id should be an integer').to.be.a('number');
                expect(post.userId, 'User Id should be an integer').to.be.a('number');
            });
        })
    });

    // it('should ensure no field in response is empty', () => {
    //     cy.request(apiurl).then((response) => {
    //         expect(response.status).to.eq(200);
    //         response.body.forEach((post) => {
    //             Object.keys(post).forEach((key) => {
    //                 const value = post[key];
    //               //  expect(value, `Field ${key} should not be empty`).not.to.be.undefined;
    //                 expect(value, `Field ${key} should not be empty`).toBeTruthy();
    //             });
    //         });
    //     });
    // });
 })