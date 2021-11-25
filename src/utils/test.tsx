// @ts-nocheck
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom"; // 4.0.0
import { queries } from "@testing-library/react";
import {
  render,
  RenderResult,
} from "@testing-library/react";
import i18n from "../config/i18nForTests";

const customRender = (ui: React.ReactElement, options = {}): RenderResult => {
  const CombinedProviders: React.FC = ({ children }) => {
    const config = {
      queries: {
        retry: false,
        cacheTime: 0,
        refetchOnWindowFocus: false,
        retryDelay: 0,
      },
    };

    const queryClient = new QueryClient({ defaultOptions: config });

    return (
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <MemoryRouter>{children}</MemoryRouter>
          </I18nextProvider>
        </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: CombinedProviders, queries, ...options });
};

export {
  customRender as render
};