/**
 * Creates or updates a cookie
 */
const createOrUpdateCookie = ({name, value, daysToExpire}: {
    name: string,
    value: string,
    daysToExpire: number
}) => {
    const day = new Date();
    day.setTime(day.getTime() + (daysToExpire*24*60*60*1000));
    const expires = `expires=${day.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}   

export default createOrUpdateCookie;