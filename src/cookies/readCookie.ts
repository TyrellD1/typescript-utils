const readCookie = ({name}: {
    name: string
}) => {
    const cname = `${name}=`;
    const decodedCookies = decodeURIComponent(document.cookie.replace(/\s+/g, '')); // replace method removes strings
    const cookies = decodedCookies.split(';');
    for(const cookie of cookies) {
        if(cookie.indexOf(cname) === -1) continue;
        return cookie.replace(cname, "")
    };
    return null;
}

export default readCookie;