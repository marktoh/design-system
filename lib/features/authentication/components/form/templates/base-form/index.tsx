"use client";
import { FormEvent, FC, ReactNode } from "react";
import { Button } from "../../../ui/button";
import { AuthLink } from "../../../ui/link";

interface AuxProps {
  children: ReactNode;
}
const Title: FC<AuxProps> = ({ children }) => {
  return (
    <h1 className="text-center text-4xl font-black text-slate-700">
      {children}
    </h1>
  );
};
const ActionText: FC<AuxProps> = ({ children }) => {
  return <p className="text-center text-base text-gray-400">{children}</p>;
};
const FormGroupBody: FC<AuxProps> = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

interface authLinksProps {
  authLinks: Array<{ href: string; title: string }>;
}
const NavLinks: FC<authLinksProps> = ({ authLinks }) => {
  return (
    authLinks?.length > 0 && (
      <div className="mt-2 flex select-none gap-2 text-center">
        {authLinks?.map((e) => (
          <AuthLink key={e.href} href={e.href} title={e.title} />
        ))}
      </div>
    )
  );
};
interface AuthFormProps {
  title: string;
  actionText: string;
  formGroups: ReactNode;
  buttonTitle: string;
  authLinks: Array<{ href: string; title: string }>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
/**
 * A base component for building authentication forms.
 */
const BaseAuthForm: FC<AuthFormProps> = ({
  title,
  actionText,
  formGroups,
  buttonTitle,
  authLinks,
  onSubmit,
}) => {
  return (
    <form
      className="mx-auto flex min-h-96 w-96 flex-col gap-2 rounded"
      onSubmit={onSubmit}
    >
      <Title>{title}</Title>
      <ActionText>{actionText}</ActionText>
      <FormGroupBody>{formGroups}</FormGroupBody>
      <Button title={buttonTitle} />
      <NavLinks authLinks={authLinks} />
    </form>
  );
};

export { BaseAuthForm };
