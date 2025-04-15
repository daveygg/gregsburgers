import ErrorScreen from '@/components/ErrorScreen';
import Menu from '@/features/menu/Menu';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/menu/')({
  component: Menu,
  errorComponent: ErrorScreen,
});