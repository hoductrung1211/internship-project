'use client';
import Icon from "@/components/Icon";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

export default function useLoadingAnimation() {
    const setIsShow = useContext(LoadingContext);

    function show() {
        setIsShow?.(true);
    }

    function hide() {
        setIsShow?.(false);
    }

    return ([
        show,
        hide,
    ]); 
}

export function LoadingProvider({
    children,
}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <LoadingContext.Provider value={setIsShow}>
            {children}
            {isShow && <Spinner />}
        </LoadingContext.Provider>
    );
}

function Spinner() {
    return (
        <div className="animate-spin fixed bottom-10 right-10 text-gray-700">
            <Icon name="fan" size="2xl" />
        </div>
    )
}