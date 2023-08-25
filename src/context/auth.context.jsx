import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isWalletInstalled, setIsWalletInstalled] = useState(false)
    const [account, setAccount] = useState(null)

    useEffect(() => {
        if (window.ethereum !== undefined) {
            setIsWalletInstalled(true)
        }

        if (Cookies.get("wallet_address") !== undefined && Cookies.get("_isAuthenticated") !== undefined) {
            setIsAuthenticated(Cookies.get("_isAuthenticated"))
            setAccount(Cookies.get("wallet_address"))
        }
    }, [])

    const walletLogin = async () => {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        .then((accounts) => {
            setAccount(accounts[0])
            Cookies.set("wallet_address", accounts[0])
            Cookies.set("_isAuthenticated", true)
            setIsAuthenticated(true)
        })
        .catch((err) => console.error(err))
    }

    const walletLogout = async () => {
        if (window.ethereum !== undefined) {
            await window.ethereum.request({
                method: "eth_requestAccounts",
                params: [{eth_accounts: {}}]
            })
            .then(() => {
                console.log("logged out.")
                Cookies.remove("wallet_address")
                Cookies.remove("_isAuthenticated")

                setAccount(null)
                setIsAuthenticated(false)
            })
            .catch(err => console.error(err))
        }
    }

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated,
            isWalletInstalled, 
            account,
            walletLogin,
            walletLogout    
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };