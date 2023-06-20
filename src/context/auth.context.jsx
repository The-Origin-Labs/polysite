import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isWalletInstalled, setIsWalletInstalled] = useState(false)
    const [account, setAccount] = useState(null)

    useEffect(() => {
        if (typeof window.ethereum !== undefined) {
            setIsWalletInstalled(true)
        }
    }, [])

    const walletLogin = async () => {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        .then((accounts) => {
            setAccount(accounts[0])
            setIsAuthenticated(true)
        })
        .catch((err) => console.error(err))
    }

    const walletLogout = async () => {
        if (typeof window.ethereum !== undefined) {
            await window.ethereum.request({
                method: "eth_requestAccounts",
                params: [{eth_accounts: {}}]
            })
            .then(() => {
                console.log("logged out.")
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