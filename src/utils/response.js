function success(data, message, res) {
    res.status(200).send({
        error: false,
        message: message,
        data: data,
    });
}

function error(status_code, message, res) {
    res.status(status_code || 500).send({
        error: true,
        message: message,
        data: [],
    });
}

function logError(route, message) {
    const date = new Date();
    const dateString = `${date.getFullYear()}/${
        date.getMonth() + 1
    }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    console.log(`[${dateString}] - ${route} = ${message}`);
}

module.exports = {
    success,
    error,
    logError,
};
