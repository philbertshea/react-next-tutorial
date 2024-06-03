// Create a Route Group Folder (xxx) and put loading.tsx inside, so loading.tsx only applies to pages within the route group
// If loading.tsx is in /dashboard, then it applies to customers/page.tsx and invoices/page.tsx as well.
// Parenthesis () expresses the folder as a route group, not reflected in the actual url path
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />
}