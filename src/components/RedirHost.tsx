import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

type Props = {
    path: string;
    children?: React;
}

export default function RedirHost({path, children}: Props) {
    const { siteConfig } = useDocusaurusContext();
    const { redirHost } = siteConfig.customFields;
    const url = `https://${redirHost}${path}`
    return <a href={url} rel="noopener noreferrer">
        {children ?? url}
    </a>;
}
