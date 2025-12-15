import { createContext, useState, useCallback, useContext } from "react";

const ToastContext = createContext();
const TOAST_DURATION = 5000; // fade away after 5 sec
let toastId = 0; // ensure every toast has unique ID

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const addToast = useCallback((message, variant = 'success') => {
        const newToast = {
            id: toastId++
            ,message
            ,variant
            ,show: true
        };
        setToasts(prev => [newToast, ...prev]);
        setTimeout(() => {
            removeToast(newToast.id);
        }, TOAST_DURATION);
    }, [removeToast]);

    const contextValue = {
        toasts
        ,addToast
        ,removeToast
    };

    return (
        <ToastContext.Provider value={contextValue}>
            { children }
        </ToastContext.Provider>
    );
};