import { ChefHat } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-foreground/5 border-r bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 font-medium text-foreground text-lg">
          <ChefHat className="h-5 w-5" />
          <span className="font-semibold">marmitex.coelho</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; marmitex.coelho - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
