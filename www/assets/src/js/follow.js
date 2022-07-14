$(document).ready(() => {
    if($("#follow-container")[0]) {
        getFollows();
    }
})

const displayUnfollow = (nb) => {
    let cont = $("#follow-container");
    cont.html("");
    cont.append(`<svg id="btn-follow" class="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="bg-color" d="M16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5Z" fill="#323232"/>
        <path class="btn-color" d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#323232"/>
        </svg>`) 
    cont.append(`<p class="pr-2 c-pink">${nb}</p>`)
    $('#btn-follow').click(toggleFollow)    
}

const displayFollow = (nb, notification) => {
    let cont = $("#follow-container");
    cont.html("");
    cont.append(`<svg id="btn-follow" class="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="btn-color" d="M16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5Z" fill="#323232"/>
        <path class="btn-color" d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#323232"/>
        </svg>`) 
    cont.append(`<p class="pr-2 c-pink">${nb}</p>`)      
    cont.append(getBell(notification)) 
    $('#btn-follow').click(toggleFollow) 
    $('#btn-bell').click(toggleNotification)     
}

const getBell = (notification) => {
    if(notification == 0) {
        return`<svg id="btn-bell" class="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="btn-color" d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM12 6.5C14.49 6.5 16 8.52 16 11V11.1L18 13.1V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C10.26 4.74 10.03 4.83 9.81 4.91L11.45 6.55C11.63 6.53 11.81 6.5 12 6.5ZM5.41 3.35L4 4.76L6.81 7.57C6.29 8.57 6 9.74 6 11V16L4 18V19H18.24L19.98 20.74L21.39 19.33L5.41 3.35ZM16 17H8V11C8 10.32 8.12 9.68 8.34 9.1L16 16.76V17Z" fill="#323232"/>
        </svg>
        `
    }
    return `<svg id="btn-bell" class="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="btn-color" d="M7.57979 4.08L6.14979 2.65C3.74978 4.48 2.16979 7.3 2.02979 10.5H4.02979C4.17979 7.85 5.53979 5.53 7.57979 4.08ZM19.9698 10.5H21.9698C21.8198 7.3 20.2398 4.48 17.8498 2.65L16.4298 4.08C18.4498 5.53 19.8198 7.85 19.9698 10.5ZM17.9998 11C17.9998 7.93 16.3598 5.36 13.4998 4.68V4C13.4998 3.17 12.8298 2.5 11.9998 2.5C11.1698 2.5 10.4998 3.17 10.4998 4V4.68C7.62979 5.36 5.99979 7.92 5.99979 11V16L3.99979 18V19H19.9998V18L17.9998 16V11ZM11.9998 22C12.1398 22 12.2698 21.99 12.3998 21.96C13.0498 21.82 13.5798 21.38 13.8398 20.78C13.9398 20.54 13.9898 20.28 13.9898 20H9.98979C9.99979 21.1 10.8898 22 11.9998 22Z" fill="#323232"/>
        </svg>
        `
}

const getFollows = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if(params.userId && isNaN(params.userId)) {
        return
    }

    fetch(`/get-follows?id=${params.userId}`, {
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        if(!data.follow) {
            displayUnfollow(data.count);
        }else {
            displayFollow(data.count, data.notification);
        }
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const toggleFollow = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if(params.userId && isNaN(params.userId)) {
        return
    }
    fetch(`/toggle-follow`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: params.userId})
    }).then((r) => {
        if(r.redirected === true) window.location.href = "/register-login?url=" + window.location.pathname;
        getFollows();
        })
        .catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const toggleNotification = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if(params.userId && isNaN(params.userId)) {
        return
    }
    fetch(`/toggle-notification`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: params.userId})
    }).then((r) => {
        getFollows();
        })
        .catch((error) => {
        console.log('Erreur : ' + error);
    });
}

