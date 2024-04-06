"use client";

import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { localStore } from "@/app/utils/localStore";
import { StorageVariable } from "@/app/utils/constants/storageVariables";
import BlankPageLoader from "@/app/loading";

type HocProps = {};

const AuthGuard = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P & HocProps> => {
  const AuthComponent: React.FC<P & HocProps> = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
      null
    );

    useEffect(() => {
      const checkAuthentication = async () => {
        const isAuthenticatedFromStorage = localStore.getItem(
          StorageVariable.IS_AUTHENTICATED
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsAuthenticated(!!isAuthenticatedFromStorage); // Convert to boolean
      };

      checkAuthentication();
    }, []);

    useEffect(() => {
      if (isAuthenticated === false) {
        router.replace("/login"); //
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated === null) {
      return <BlankPageLoader />;
    }

    return isAuthenticated ? <WrappedComponent {...(props as P)} /> : null;
  };

  return AuthComponent;
};

export default AuthGuard;
