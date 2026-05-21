import '@/global.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from './routes';

export function App() {
  return (
    <>
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            actionButton:
              '!bg-current/10 !text-current hover:!bg-current/20 !border !border-current/20',
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}
