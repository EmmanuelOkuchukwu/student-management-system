export function MockBackend() {
    let users = [
        {
            id: 1,
            username: "emmanz95",
            password: "Password@123?",
            email: "emmanz95@gmail.com",
            firstname: "Emmanuel",
            lastname: "Okuchukwu"
        },
    ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);
                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });

                    if(filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            password: user.password,
                            email: user.email,
                            firstname: user.firstname,
                            lastname: user.lastname
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('username or password is incorrect');
                    }
                    return;
                }
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === `basic ${window.btoa('emmanz95@gmail.com:emmanz95@gmail.com')}`) {
                        resolve({ ok: true, text: () => Promise.resolve() });
                    }
                    return;
                }
                realFetch(url, opts).then(response => resolve(response));
            }, 500);
        });
    }
}