import React from 'react';
const ErrorPage = ({
    children
}) => {
    return (
        <section id="catalog-page">
            <h1>404</h1>
            {children && <h2 className="no-articles">{children}</h2>}
        </section>
    )
}

export default ErrorPage;