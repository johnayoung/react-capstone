import buildUrl from '../../node_modules/build-url/dist/build-url';

const urlBuilder = (values) => {
    const {description, domain, name, path, query, sub, protocol} = values;
    const validSub = (!sub) ? '' : `${sub}.`;
    const baseUrl = `${protocol}://${validSub}${domain}`
    const notAllowed = Object.keys({description, domain, name, path, query, sub, protocol});
    const params = Object.keys(values)
        .filter(key => !(notAllowed.includes(key)))
        .reduce((obj, key) => {
            obj[key] = values[key];
            return obj;
        }, {})
    return buildUrl(baseUrl, {
        path,
        queryParams: params
    })
};

export default urlBuilder;