fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json()) 
    .then(users => { 
        const firstUser = users[0]; 
        console.log(firstUser); 
        return fetch( 
            'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
        );
    })
    .then(response => response.json()) 
    .then(posts => console.log(posts)) 
    .catch(error => console.log(error));

    const myAsyncFunction = async () => {
        try {
            const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await usersResponse.json();
            const secondUser = users[1];

            console.log(secondUser);

            const postsResponse = await fetch(
                'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
            );
            const posts = await postsResponse.json();

            console.log('posts');
        }
        catch (err)  {
            console.log('there was an error');
        }
    }
// LINE 1: fetch our "users"
// LINE 2: get the response. Call response.json() which gives back a promise which pass to the next .then()
// LINE 3: we finally have our array of "users"
// LINE 4: cast our "const firstUser" to the first "user" in the array
// LINE 5: we log out our first "user" to see what it looks like
// LINE 6: we then return "fetch" to the below link that ends in the "firstUser" ID. So, we want all the posts related to our "firstUser"
// LINE 7:
// LINE 8:
// LINE 9:
// LINE 10: then we get back a response and convert it to JSON again
// LINE 11: console log the final posts
