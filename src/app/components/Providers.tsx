'use client';

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Render nothing on the server or until hydration is complete
        return null;
    }

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    );
}

export default Providers;
