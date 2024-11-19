import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo(0, 0); // Scroll to the top
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        // Clean up the event listener
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return null;
};

export default ScrollToTop;
