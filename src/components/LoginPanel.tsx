import React from 'react';

interface LoginPanelProps {
  signup?: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onSwitch: () => void;
}

export function LoginPanel({ signup = false, onSubmit, onSwitch }: LoginPanelProps) {
  return (
    <main className="auth">
      <form onSubmit={onSubmit} aria-label={signup ? 'Cadastro' : 'Login'}>
        <button type="button" className="brand-button" onClick={() => history.pushState({}, '', '/') || location.reload()}>
          <span>R</span> Raspa da Sorte
        </button>
        <h1>{signup ? 'Crie sua conta' : 'Bem-vindo de volta'}</h1>
        <p>{signup ? 'Cadastre-se para começar.' : 'Entre para acessar sua conta.'}</p>
        {signup && <input name="name" placeholder="Nome" autoComplete="name" required />}
        <input name="email" type="email" placeholder="E-mail" autoComplete="email" required />
        <input name="password" type="password" placeholder="Senha" autoComplete={signup ? 'new-password' : 'current-password'} minLength={6} required />
        {signup && <input name="confirmPassword" type="password" placeholder="Confirmar senha" autoComplete="new-password" minLength={6} required />}
        <button type="submit">{signup ? 'Criar conta' : 'Entrar'}</button>
        <button type="button" className="link" onClick={onSwitch}>
          {signup ? 'Já tenho uma conta' : 'Ainda não tenho conta'}
        </button>
      </form>
    </main>
  );
}
