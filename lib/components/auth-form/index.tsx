"use client";
import { FormEvent, FC, ReactNode } from "react";
import Button from "./Button";
import AuthLink from "./Link";

interface AuxProps {
  children: ReactNode;
}
const Title: FC<AuxProps> = ({ children }) => {
  return (
    <h1 className="mb-2 text-4xl font-medium text-slate-700">{children}</h1>
  );
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
      <div className="mt-2 flex gap-2">
        {authLinks?.map((e) => <AuthLink href={e.href} title={e.title} />)}
      </div>
    )
  );
};
interface AuthFormProps {
  title: string;
  formGroups: ReactNode;
  buttonTitle: string;
  authLinks: Array<{ href: string; title: string }>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
/**
 * A base component for building authentication forms.
 */
const AuthForm: FC<AuthFormProps> = ({
  title,
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
      <FormGroupBody>{formGroups}</FormGroupBody>
      <Button title={buttonTitle} />
      <NavLinks authLinks={authLinks} />
    </form>
  );
};

export default AuthForm;
