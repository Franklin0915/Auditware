import session from "../Session"

const Data = {
    name: 'Joshua',
    isLogin: session.get('isLogin')
}

export default Data