import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { AlertTriangle, Wifi, Server, Search, HelpCircle } from 'lucide-react';
import { ErrorInfo } from '@/types/game';

interface ErrorDialogProps {
  error: ErrorInfo | null;
  open: boolean;
  onClose: () => void;
}

const getErrorIcon = (type: ErrorInfo['type']) => {
  switch (type) {
    case 'network':
      return <Wifi className="h-8 w-8 text-destructive" />;
    case 'api':
      return <Server className="h-8 w-8 text-destructive" />;
    case 'search':
      return <Search className="h-8 w-8 text-destructive" />;
    default:
      return <HelpCircle className="h-8 w-8 text-destructive" />;
  }
};

const getErrorTitle = (type: ErrorInfo['type']) => {
  switch (type) {
    case 'network':
      return 'Connection Error';
    case 'api':
      return 'Service Unavailable';
    case 'search':
      return 'Search Error';
    default:
      return 'Unexpected Error';
  }
};

export function ErrorDialog({ error, open, onClose }: ErrorDialogProps) {
  if (!error) return null;

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {getErrorIcon(error.type)}
            <AlertDialogTitle className="text-lg font-semibold">
              {getErrorTitle(error.type)}
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed">
            {error.message}
          </AlertDialogDescription>
          <div className="mt-3 p-2 bg-muted rounded-md">
            <span className="text-xs font-mono text-muted-foreground">
              Error Code: {error.code}
            </span>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className="w-full">
            Try Again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}