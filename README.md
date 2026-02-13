# Customized Sign-In Page

> **Disclaimer:** This project is **nothing official** and of course **not supported** by any Red Hat Developer Hub (RHDH) versions. It is just a custom workaround for creating a customized sign-in page for RHDH instances. Use it at your own risk.

## Overview

This is an RHDH frontend plugin that provides a customized sign-in page. It can serve as a starting point or basis for building your own Backstage sign-in plugin tailored to your needs.

## Authentication Provider

The current implementation uses **Keycloak** (via OIDC/OAuth2) as the authentication provider. However, the plugin structure is not tied to Keycloak specifically — you can adapt it to work with any authentication provider supported by Backstage (e.g. GitHub, GitLab, Google, Okta, etc.) by modifying the OAuth2 configuration in the sign-in page component.

## Getting Started

A very nice blogpost to get you up to speed with RHDH plugins is here: https://developers.redhat.com/articles/2025/11/20/how-build-your-dynamic-plug-ins-developer-hub
