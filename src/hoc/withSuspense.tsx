import React from "react"

export function withSuspense<P>(Component: React.ComponentType<P>) {
    return (props: P) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    };
}