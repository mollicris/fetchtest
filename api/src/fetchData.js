export function fetchData(url){
    const promise = fetch(url)
        .then(response => response.json())
        .then(data => data)

    return getSuspender(promise);

}

function getSuspender(promise) {
    let status = 'pending';
    let response;
    const suspender = promise.then(
        res => {
            status = 'success';
            response = res;
        },
        error => {
            status = 'error';
            response = error;
        }
    );

    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            case 'success':
                return response;
            default:
                throw new Error('This should never happen');
        }
    }
    return { read };
}



