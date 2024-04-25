import Cookies from 'js-cookie';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { httpPost } from '../../lib/http';
import { TOKEN_COOKIE_NAME } from '../../lib/jwt';

interface ErrorResponse {
  type?: string;
  message?: string;
}

interface AppError {
  type: string;
}

interface FetchError {
  message: string;
}

export function EmailLoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { response, error: apiError } = await httpPost<{ token: string }>(
        `${import.meta.env.PUBLIC_API_URL}/v1-login`,
        {
          email,
          password,
        },
      );

      if (response?.token) {
        Cookies.set(TOKEN_COOKIE_NAME, response.token, {
          path: '/',
          expires: 30,
          domain: import.meta.env.DEV ? 'localhost' : '.localhost',
        });
        window.location.reload();
      } else if (apiError && 'type' in apiError && apiError.type === 'user_not_verified') {
        window.location.href = `/verification-pending?email=${encodeURIComponent(email)}`;
      } else {
        setError(apiError?.message || 'Ýalňyşlyk ýüze çykdy, täzeden synanyşyň.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <form className="w-full" onSubmit={handleFormSubmit}>
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
        placeholder="Elektron salgy giriziň"
      />
      <label htmlFor="password" className="sr-only">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
        placeholder="Açar söz giriziň"
      />

      <p className="mb-3 mt-2 text-sm text-gray-500">
        <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">
          Açar söz üýtgetmek isleýärsiňizmi?
        </a>
      </p>

      {error && (
        <p className="mb-2 rounded-md bg-red-100 p-2 text-red-800">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
      >
        {isLoading ? 'Garaşyň...' : 'Dowam etmek'}
      </button>
    </form>
  );
}
