import { Toast, ToastContainer } from "react-bootstrap";
import { useToast } from "../context/ToastContext";

export default function GlobalToastContainer() {
    const {toasts, removeToast} = useToast();
    
    return (
        <ToastContainer 
            className="p-3" 
            position="bottom-end"
            style={{ zIndex: 999 }}
        >
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    onClose={() => removeToast(toast.id)}
                    show={toast.show}
                    autohide
                    bg={toast.variant}
                >
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                        <small className="text-muted">{new Date().toLocaleDateString()}</small>
                    </Toast.Header>
                    <Toast.Body className={toast.variant === 'warning' ? 'text-dark' : 'text-white'}>
                        {toast.message}
                    </Toast.Body>
                </Toast>
            ))}
        </ToastContainer>
    );
}