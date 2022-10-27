import Header from './Header';
import Footer from './Footer';
import { createContext, useState } from 'react';
const UserContext = createContext();
const User = {
    name: 'Lương Nguyễn Khoa',
    account: 'lnkhoa1205',
    login: 'true',
};

function Default({ children }) {
    const [user, setUser] = useState(User);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div>
                <Header user={user} />
                <div style={{ marginTop: '55px', overflow: 'hidden' }}>{children}</div>
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default Default;
