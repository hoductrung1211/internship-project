import { LoadingProvider } from "@/utils/hooks/useLoadingAnimation"
import { NotificationProvider } from "@/utils/hooks/useNotification"
 

export default function Provider({
    children
}) {
    return (
        <NotificationProvider>
        <LoadingProvider>
            {children}
        </LoadingProvider>
        </NotificationProvider>
    )
}