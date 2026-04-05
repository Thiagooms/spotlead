'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'

type AuthState = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  )
}

function Spinner() {
  return (
    <motion.span
      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
    />
  )
}

function BackToSite() {
  return (
    <a
      href="/"
      className="group absolute top-8 left-8 inline-flex items-center gap-1.5 text-[12.5px] text-black/30 hover:text-black/60 transition-colors duration-200"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden="true"
      >
        <path d="M8.5 3L4.5 7L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      spotlead.com.br
    </a>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [authState, setAuthState] = useState<AuthState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isEmailValid = EMAIL_REGEX.test(email)
  const isLoading = authState === 'loading'

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isEmailValid || isLoading) return

    setAuthState('loading')
    setErrorMessage('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })

    if (error) {
      setErrorMessage('Não foi possível enviar o link. Tente novamente.')
      setAuthState('error')
      return
    }

    setAuthState('success')
  }

  async function handleGoogleSignIn() {
    if (isLoading) return
    setAuthState('loading')
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }

  return (
    <main className="min-h-screen flex">
      <div className="flex-1 flex flex-col relative">
        <BackToSite />

        <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-16 py-24">
          <div className="w-full max-w-[380px]">

            <AnimatePresence mode="wait">
              {authState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, #0081F6 0%, #6366f1 100%)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-[1.4rem] font-semibold text-black mb-2">Verifique seu e-mail</h2>
                  <p className="text-[14px] text-black/50 leading-relaxed">
                    Enviamos um link de acesso para<br />
                    <span className="text-black/80 font-medium">{email}</span>
                  </p>
                  <button
                    onClick={() => { setAuthState('idle'); setEmail('') }}
                    className="mt-8 text-[13px] text-black/40 hover:text-black/70 transition-colors underline underline-offset-2"
                  >
                    Usar outro e-mail
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <h1 className="text-[1.6rem] font-semibold text-black leading-tight mb-1.5 text-center">
                    Entre na SpotLead
                  </h1>
                  <p className="text-[13.5px] text-black/40 mb-8 leading-relaxed text-center">
                    Acesse sua conta ou crie uma em segundos.
                  </p>

                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3 w-full" noValidate>
                    <label htmlFor="login-email" className="sr-only">E-mail</label>
                    <input
                      id="login-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={e => { setEmail(e.target.value); if (authState === 'error') setAuthState('idle') }}
                      autoFocus
                      autoComplete="email"
                      className="w-full h-11 px-4 text-[14px] rounded-xl border border-black/[0.12] bg-black/[0.02] text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/25 transition-all"
                    />

                    <AnimatePresence>
                      {authState === 'error' && (
                        <motion.p
                          role="alert"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[12.5px] text-red-500 px-1"
                        >
                          {errorMessage}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={!isEmailValid || isLoading}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-11 rounded-xl flex items-center justify-center gap-2 text-[14px] font-semibold text-white transition-opacity disabled:opacity-40"
                      style={{ background: '#0A0A0A' }}
                      aria-busy={isLoading}
                    >
                      {isLoading ? <Spinner /> : 'Continuar com e-mail'}
                    </motion.button>
                  </form>

                  <div className="flex items-center gap-3 my-5 w-full">
                    <div className="flex-1 h-px bg-black/[0.08]" />
                    <span className="text-[12px] text-black/30 font-medium">ou</span>
                    <div className="flex-1 h-px bg-black/[0.08]" />
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-11 rounded-xl flex items-center justify-center gap-2.5 text-[14px] font-medium text-black/80 border border-black/[0.1] bg-white hover:bg-black/[0.02] transition-colors disabled:opacity-40"
                  >
                    <GoogleIcon />
                    Continuar com Google
                  </motion.button>

                  <p className="mt-8 text-center text-[11.5px] text-black/30 leading-relaxed">
                    Ao continuar, você concorda com nossos{' '}
                    <a href="/termos-e-privacidade#termos-de-uso" className="underline underline-offset-2 hover:text-black/60 transition-colors">
                      Termos de Uso
                    </a>{' '}
                    e{' '}
                    <a href="/termos-e-privacidade#politica-de-privacidade" className="underline underline-offset-2 hover:text-black/60 transition-colors">
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>

      <div
        className="hidden md:flex w-[46%] flex-col items-center justify-center relative overflow-hidden"
        style={{ background: '#0A0A0A' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[360px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #0081F6, transparent)' }}
        />

        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{
              width: '14rem',
              height: '14rem',
              background: 'radial-gradient(circle, rgba(0,129,246,0.18) 0%, transparent 70%)',
              filter: 'blur(18px)',
            }}
          />
          <motion.img
            src="/assets/logo-nova.svg"
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: '8rem', width: 'auto', position: 'relative' }}
          />
        </div>
      </div>
    </main>
  )
}
