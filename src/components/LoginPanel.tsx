import React, { FormEvent, useState } from 'react';
interface LoginPanelProps { signup?: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onSwitch: () => void; }
export function LoginPanel({ signup = false, onSubmit, onSwitch }: LoginPanelProps) {
  const [showPassword, setShowPassword] = useState(false);
  return <main className="auth"><form onSubmit={onSubmit} aria-label={signup ? 'Cadastro' : 'Login'}>
    <button type="button" className="brand-button" onClick={() => history.pushState({}, '', '/') || location.reload()}><span>R</span> Raspa da Sorte</button>
    <h1>{signup ? 'Crie sua conta' : 'Bem-vindo de volta'}</h1>
    <p>{signup ? 'Cadastre-se para começar sua experiência.' : 'Entre para acessar sua conta.'}</p>
    {signup && <label>Nome<input name="name" placeholder="Nome completo" autoComplete="name" required /></label>}
    <label>E-mail<input name="email" type="email" placeholder="seu@email.com" autoComplete="email" required /></label>
    <label>Senha<div className="password-field"><input name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" autoComplete={signup ? 'new-password' : 'current-password'} minLength={6} required /><button type="button" className="password-toggle" onClick={() => setShowPassword(v => !v)}>{showPassword ? 'Ocultar' : 'Mostrar'}</button></div></label>
    {signup && <label>Confirmar senha<input name="confirmPassword" type="password" placeholder="••••••••" autoComplete="new-password" minLength={6} required /></label>}
    {!signup && <button type="button" className="forgot" onClick={() => alert('Recuperação de senha será conectada ao Supabase na próxima etapa.')}>Esqueci minha senha</button>}
    <button type="submit" className="primary-auth">{signup ? 'Criar conta' : 'Entrar'}</button>
    <button type="button" className="link" onClick={onSwitch}>{signup ? 'Já tenho uma conta' : 'Ainda não tenho conta'}</button>
  </form></main>;
}
