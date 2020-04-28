import md5 from 'md5';
const hashGravatar = (email) => {

    const hash = md5(email)

    const myUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

    return myUrl;

}
export default hashGravatar